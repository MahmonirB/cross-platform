import { WEB_ENV } from '@app/config';
import * as SvgCodes from '../assets/images/index';
import EmptyList from '@app/assets/images/emptyList.svg';
import Error from '@app/assets/images/error.svg';

export const STATUS_TEXT = {
  loading: 'Loading...',
  error: 'Oops! An Error has occured :(',
  empty: 'Data Not found!',
};

export const SVG_IMG: { [key: string]: any } = WEB_ENV
  ? {
      emptyList: SvgCodes.emptyList,
      error: SvgCodes.error,
    }
  : {
      emptyList: EmptyList,
      error: Error,
    };
