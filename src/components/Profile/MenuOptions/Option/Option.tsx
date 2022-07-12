import { IonIcon } from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";
import { OptionTypes } from "./Option.types";
import "./Option.scss";

export function Option(props: OptionTypes.Props) {
  const { icon, title, onClick } = props;

  return (
    <div className="menu-options-container__item" onClick={onClick}>
      <div>
        <IonIcon icon={icon} />
        <span>{title}</span>
      </div>

      <IonIcon icon={chevronForwardOutline} />
    </div>
  );
}
