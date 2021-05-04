import { FormikTouched, getIn } from 'formik';

type PropsNeededForFieldHighlight = (
  error: object,
  fieldName: string,
  elementTouched?: boolean | FormikTouched<Date>
) => object | undefined;

const handleFieldHighlightIfErrorWillOccur: PropsNeededForFieldHighlight = (
  error,
  fieldName,
  elementTouched
) => {
  if (getIn(error, fieldName) && elementTouched)
    return {
      '--input-theme': 'var(--primary-red)',
    };
};

export default handleFieldHighlightIfErrorWillOccur;
