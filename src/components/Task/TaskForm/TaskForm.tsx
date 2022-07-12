import { IonInput, IonButton, IonSpinner } from "@ionic/react";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import { useTasks } from "../../../hooks";
import { TaskFormTypes } from "./TaskForm.types";
import { initialValues, validationSchema } from "./TaskForm.data";
import "./TaskForm.scss";

export function TaskForm(props: TaskFormTypes.Props) {
  const { onClose } = props;
  const { createTask } = useTasks();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: (formValue) => {
      const data = {
        id: uuidv4(),
        description: formValue.task,
        completed: false,
        created_at: new Date(),
      };

      createTask(data);

      onClose();
    },
  });

  return (
    <div className="task-form">
      <IonInput
        placeholder="Descripcion de la tarea"
        onIonChange={(e) => formik.setFieldValue("task", e.detail.value!)}
        color={formik.errors.task}
      />
      <IonButton expand="block" onClick={() => formik.handleSubmit()}>
        {formik.isSubmitting ? <IonSpinner name="crescent" /> : "Crear"}
      </IonButton>
    </div>
  );
}
