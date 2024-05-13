import { useForm, ValidationError } from "@formspree/react";
import {
  Button,
  Input,
  Textarea,
  Select,
  SelectItem,
  Checkbox,
  Card,
  CardHeader,
  CardBody,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

const ContactScreen = () => {
  const [state, handleSubmit] = useForm("xjvnzrnw");

  // Überprüfen, ob die Anfrage erfolgreich war
  const successMessage = state.succeeded
    ? "Vielen Dank Ihre Nachricht wurde erfolgreich gesendet."
    : "";

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-red-400/50 via-rose-500/75 to-red-600/75">
      <Card className="w-2/3 pt-5 shadow-lg">
        <CardBody>
          <h2 className="text-center mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Kontakt
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center p-5 gap-5"
          >
            <Input type="text" label="Vorname" isRequired isClearable />

            <Input type="text" label="Nachname" isRequired isClearable />

            <Input type="email" label="Email" isRequired isClearable />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <Select label="Anfragegrund" isRequired>
              <SelectItem>Website</SelectItem>
              <SelectItem>Veranstaltung</SelectItem>
              <SelectItem>Verbesserungsvorschlag</SelectItem>
            </Select>

            <Textarea
              id="message"
              name="message"
              label="Ihre Nachricht"
              isRequired
              rows={10}
              cols={30}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <div className="flex gap-5">
              <Checkbox isRequired></Checkbox>
              <p>
                Mit dem Absenden Ihrer Nachricht erklären Sie sich mit der
                Verarbeitung Ihrer angegebenen Daten zum Zweck der Bearbeitung
                Ihrer Anfrage einverstanden. (
                <Link to="/imprint">Impressum</Link> und{" "}
                <Link to="/data-privacy">Datenschutz</Link> )
              </p>
            </div>

            <Button type="submit" disabled={state.submitting}>
              Submit
            </Button>
            {/* Anzeige der Bestätigungsnachricht */}
            <p>{successMessage}</p>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default ContactScreen;
