import { useForm, ValidationError } from "@formspree/react";
import {
  Button,
  Input,
  Select,
  SelectItem,
  Checkbox,
  Card,
  CardBody,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useReducer } from 'react';

// Initialer Zustand für die Ticketmenge
const initialState = { count: 0 };

// Reducer-Funktion
function reducer(state1, action) {
  switch (action.type) {
    case 'increment':
      return { count: state1.count + 1 };
    case 'decrement':
      // Damit der Wert nicht in den Minusbereich geht
      return { count: Math.max(state1.count - 1, 0) }; 
    default:
      return state1;
  }
}

const TicketsScreen = () => {
  // Formspree state
  const [state, handleSubmit] = useForm("xjvnzrnw");
  // useReducer für die Ticketmenge
  const [state1, dispatch] = useReducer(reducer, initialState);

  const successMessage = state.succeeded
   ? "Vielen Dank Ihre Nachricht wurde erfolgreich gesendet."
    : "";

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-red-400/50 via-rose-500/75 to-red-600/75">
      <Card className="w-2/3 pt-5 shadow-lg">
        <CardBody>
          <h2 className="text-center mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Eintrittskarten
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

            <Select label="Veranstaltung" isRequired>
              <SelectItem>Damensitzung</SelectItem>
              <SelectItem>Herrensitzung</SelectItem>
            </Select>

            <div className="flex justify-center items-center gap-5">
              <p>Menge: {state1.count}</p>
              <Button onClick={() => dispatch({ type: 'increment' })}>+</Button>
              <Button
                onClick={() => dispatch({ type: 'decrement' })}
                disabled={state1.count <= 0}
              >
                -
              </Button>
            </div>

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
            <p>{successMessage}</p>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default TicketsScreen;
