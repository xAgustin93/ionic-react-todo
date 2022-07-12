import { useRef } from "react";
import { IonModal, IonContent } from "@ionic/react";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { imagesOutline, personCircleOutline } from "ionicons/icons";
import { useUser } from "../../../hooks";
import { Option } from "./Option";
import { ChangeNameForm } from "../ChangeNameForm";
import "./MenuOptions.scss";

export function MenuOptions() {
  const modal = useRef<HTMLIonModalElement>(null);
  const { onChangeAvatar } = useUser();

  const openChangeName = () => modal.current?.present();
  const closeModal = () => modal.current?.dismiss();

  const openCamera = async () => {
    const response = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    if (response.webPath) {
      onChangeAvatar(response.webPath);
    }
  };

  return (
    <>
      <div className="menu-options-container">
        <Option
          title="Cambiar avatar"
          icon={imagesOutline}
          onClick={openCamera}
        />
        <Option
          title="Cambiar nombre"
          icon={personCircleOutline}
          onClick={openChangeName}
        />
      </div>

      <IonModal
        ref={modal}
        trigger="open-modal"
        initialBreakpoint={0.35}
        breakpoints={[0, 0.35]}
      >
        <IonContent className="ion-padding">
          <ChangeNameForm onClose={closeModal} />
        </IonContent>
      </IonModal>
    </>
  );
}
