// AccordionWithDropdown.tsx
import { Form } from '@rjsf/chakra-ui';
import CustomSelectField from './CustomSelectField';
import validator from "@rjsf/validator-ajv6";
import { JSONSchema7 } from 'json-schema';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import './App.css';

// ...rest of your imports and schema

const AccordionWithDropdown: React.FC = () => {
  const schema: any = {
    title: "My Form",
    type: "object",
    properties: {
      choice: {
        type: "string",
        title: "Make a choice",
        enumOptions: ["option1", "option2", "option3", "option4", "option5"],
        enum: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
      },
    },
  };

  const onSubmit = (data: any) => {
    console.log("Data submitted: ", data.formData);
  };

  const fields = {
    StringField: CustomSelectField,
  };

  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Section 1 title
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
					<div className="form-container">
						<Form
							schema={schema}
							validator={validator}
							onSubmit={onSubmit}
							// fields={fields}
						/>
					</div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionWithDropdown;
