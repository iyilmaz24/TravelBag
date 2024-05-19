import Button from "./Button";
import { buttonsList } from "../lib/constants";

export default function ButtonGroup() {
  return (
    <section className="button-group">
      {buttonsList.map((buttonText: string) => {
        return (
          <Button key={buttonText} text={buttonText} secondary={true}></Button>
        );
      })}
    </section>
  );
}
