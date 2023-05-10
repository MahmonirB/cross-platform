import * as SvgCodes from '../assets/images/index';

export const STATUS_TEXT = {
  loading: 'Loading...',
  error: 'Oops! An Error has occured :(',
  empty: 'Data Not found!',
};

export const SVG_IMG: { [key: string]: any } = {
  emptyList: SvgCodes.emptyList,
  error: SvgCodes.error,
  spinner: SvgCodes.spinner,
};
