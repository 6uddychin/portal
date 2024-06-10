/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createMessage } from "../graphql/mutations";
const client = generateClient();
export default function MessageCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    from: "",
    subject: "",
    summary: "",
    relatedLocation: "",
    related: "",
    date: "",
    seen: false,
    replied: false,
    sfid: "",
  };
  const [from, setFrom] = React.useState(initialValues.from);
  const [subject, setSubject] = React.useState(initialValues.subject);
  const [summary, setSummary] = React.useState(initialValues.summary);
  const [relatedLocation, setRelatedLocation] = React.useState(
    initialValues.relatedLocation
  );
  const [related, setRelated] = React.useState(initialValues.related);
  const [date, setDate] = React.useState(initialValues.date);
  const [seen, setSeen] = React.useState(initialValues.seen);
  const [replied, setReplied] = React.useState(initialValues.replied);
  const [sfid, setSfid] = React.useState(initialValues.sfid);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFrom(initialValues.from);
    setSubject(initialValues.subject);
    setSummary(initialValues.summary);
    setRelatedLocation(initialValues.relatedLocation);
    setRelated(initialValues.related);
    setDate(initialValues.date);
    setSeen(initialValues.seen);
    setReplied(initialValues.replied);
    setSfid(initialValues.sfid);
    setErrors({});
  };
  const validations = {
    from: [{ type: "Required" }],
    subject: [{ type: "Required" }],
    summary: [{ type: "Required" }],
    relatedLocation: [],
    related: [],
    date: [{ type: "Required" }],
    seen: [{ type: "Required" }],
    replied: [{ type: "Required" }],
    sfid: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          from,
          subject,
          summary,
          relatedLocation,
          related,
          date,
          seen,
          replied,
          sfid,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createMessage.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "MessageCreateForm")}
      {...rest}
    >
      <TextField
        label="From"
        isRequired={true}
        isReadOnly={false}
        value={from}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              from: value,
              subject,
              summary,
              relatedLocation,
              related,
              date,
              seen,
              replied,
              sfid,
            };
            const result = onChange(modelFields);
            value = result?.from ?? value;
          }
          if (errors.from?.hasError) {
            runValidationTasks("from", value);
          }
          setFrom(value);
        }}
        onBlur={() => runValidationTasks("from", from)}
        errorMessage={errors.from?.errorMessage}
        hasError={errors.from?.hasError}
        {...getOverrideProps(overrides, "from")}
      ></TextField>
      <TextField
        label="Subject"
        isRequired={true}
        isReadOnly={false}
        value={subject}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              from,
              subject: value,
              summary,
              relatedLocation,
              related,
              date,
              seen,
              replied,
              sfid,
            };
            const result = onChange(modelFields);
            value = result?.subject ?? value;
          }
          if (errors.subject?.hasError) {
            runValidationTasks("subject", value);
          }
          setSubject(value);
        }}
        onBlur={() => runValidationTasks("subject", subject)}
        errorMessage={errors.subject?.errorMessage}
        hasError={errors.subject?.hasError}
        {...getOverrideProps(overrides, "subject")}
      ></TextField>
      <TextField
        label="Summary"
        isRequired={true}
        isReadOnly={false}
        value={summary}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              from,
              subject,
              summary: value,
              relatedLocation,
              related,
              date,
              seen,
              replied,
              sfid,
            };
            const result = onChange(modelFields);
            value = result?.summary ?? value;
          }
          if (errors.summary?.hasError) {
            runValidationTasks("summary", value);
          }
          setSummary(value);
        }}
        onBlur={() => runValidationTasks("summary", summary)}
        errorMessage={errors.summary?.errorMessage}
        hasError={errors.summary?.hasError}
        {...getOverrideProps(overrides, "summary")}
      ></TextField>
      <TextField
        label="Related location"
        isRequired={false}
        isReadOnly={false}
        value={relatedLocation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              from,
              subject,
              summary,
              relatedLocation: value,
              related,
              date,
              seen,
              replied,
              sfid,
            };
            const result = onChange(modelFields);
            value = result?.relatedLocation ?? value;
          }
          if (errors.relatedLocation?.hasError) {
            runValidationTasks("relatedLocation", value);
          }
          setRelatedLocation(value);
        }}
        onBlur={() => runValidationTasks("relatedLocation", relatedLocation)}
        errorMessage={errors.relatedLocation?.errorMessage}
        hasError={errors.relatedLocation?.hasError}
        {...getOverrideProps(overrides, "relatedLocation")}
      ></TextField>
      <TextField
        label="Related"
        isRequired={false}
        isReadOnly={false}
        value={related}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              from,
              subject,
              summary,
              relatedLocation,
              related: value,
              date,
              seen,
              replied,
              sfid,
            };
            const result = onChange(modelFields);
            value = result?.related ?? value;
          }
          if (errors.related?.hasError) {
            runValidationTasks("related", value);
          }
          setRelated(value);
        }}
        onBlur={() => runValidationTasks("related", related)}
        errorMessage={errors.related?.errorMessage}
        hasError={errors.related?.hasError}
        {...getOverrideProps(overrides, "related")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              from,
              subject,
              summary,
              relatedLocation,
              related,
              date: value,
              seen,
              replied,
              sfid,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <SwitchField
        label="Seen"
        defaultChecked={false}
        isDisabled={false}
        isChecked={seen}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              from,
              subject,
              summary,
              relatedLocation,
              related,
              date,
              seen: value,
              replied,
              sfid,
            };
            const result = onChange(modelFields);
            value = result?.seen ?? value;
          }
          if (errors.seen?.hasError) {
            runValidationTasks("seen", value);
          }
          setSeen(value);
        }}
        onBlur={() => runValidationTasks("seen", seen)}
        errorMessage={errors.seen?.errorMessage}
        hasError={errors.seen?.hasError}
        {...getOverrideProps(overrides, "seen")}
      ></SwitchField>
      <SwitchField
        label="Replied"
        defaultChecked={false}
        isDisabled={false}
        isChecked={replied}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              from,
              subject,
              summary,
              relatedLocation,
              related,
              date,
              seen,
              replied: value,
              sfid,
            };
            const result = onChange(modelFields);
            value = result?.replied ?? value;
          }
          if (errors.replied?.hasError) {
            runValidationTasks("replied", value);
          }
          setReplied(value);
        }}
        onBlur={() => runValidationTasks("replied", replied)}
        errorMessage={errors.replied?.errorMessage}
        hasError={errors.replied?.hasError}
        {...getOverrideProps(overrides, "replied")}
      ></SwitchField>
      <TextField
        label="Sfid"
        isRequired={true}
        isReadOnly={false}
        value={sfid}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              from,
              subject,
              summary,
              relatedLocation,
              related,
              date,
              seen,
              replied,
              sfid: value,
            };
            const result = onChange(modelFields);
            value = result?.sfid ?? value;
          }
          if (errors.sfid?.hasError) {
            runValidationTasks("sfid", value);
          }
          setSfid(value);
        }}
        onBlur={() => runValidationTasks("sfid", sfid)}
        errorMessage={errors.sfid?.errorMessage}
        hasError={errors.sfid?.hasError}
        {...getOverrideProps(overrides, "sfid")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
