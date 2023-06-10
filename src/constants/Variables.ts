import { WEB_ENV } from '@app/config';
import * as SvgCodes from '../assets/images/index';
import EmptyList from '@app/assets/images/emptyList.svg';
import Error from '@app/assets/images/error.svg';
import NetworkError from '@app/assets/images/networkError.svg';
import Contact from '@app/assets/images/contact.svg';

export const STATUS_TEXT = {
  loading: 'Loading...',
  error: 'Oops! An Error has occured :(',
  empty: 'Data Not found!',
};

export const SVG_IMG: { [key: string]: any } = WEB_ENV
  ? {
      emptyList: SvgCodes.emptyList,
      error: SvgCodes.error,
      networkError: SvgCodes.networkError,
      contact: SvgCodes.contact,
    }
  : {
      emptyList: EmptyList,
      error: Error,
      networkError: NetworkError,
      contact: Contact,
    };

export const IMAGES = [
  'https://robohash.org/hicveldicta.png',
  'https://robohash.org/doloremquesintcorrupti.png',
  'https://robohash.org/consequunturautconsequatur.png',
  'https://robohash.org/facilisdignissimosdolore.png',
  'https://robohash.org/adverovelit.png',
  'https://robohash.org/laboriosamfacilisrem.png',
  'https://robohash.org/cupiditatererumquos.png',
  'https://robohash.org/quiaharumsapiente.png',
  'https://robohash.org/excepturiiuremolestiae.png',
  'https://robohash.org/aliquamcumqueiure.png',
  'https://robohash.org/impeditautest.png',
];
