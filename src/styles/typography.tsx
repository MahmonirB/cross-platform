import { StyleSheet } from 'react-native';

const title = {
  fontFamily: 'Vazir-Bold-FD-WOL',
};
const normal = {
  fontFamily: 'Vazir-FD-WOL',
};

const styles: any = {
  // headings
  h1: {
    ...title,
    fontSize: 48,
    lineHeight: 56,
  },
  h2: {
    ...title,
    fontSize: 40,
    lineHeight: 48,
  },
  h3: {
    ...title,
    fontSize: 32,
    lineHeight: 40,
  },
  h4: {
    ...title,
    fontSize: 24,
    lineHeight: 32,
  },
  h5: {
    ...title,
    fontSize: 20,
    lineHeight: 28,
  },
  h6: {
    ...title,
    fontSize: 18,
    lineHeight: 26,
  },
  // titles
  titleXL: {
    ...title,
    fontSize: 24,
    lineHeight: 32,
  },
  titleLG: {
    ...title,
    fontSize: 20,
    lineHeight: 28,
  },
  titleNormal: {
    ...title,
    fontSize: 16,
    lineHeight: 24,
  },
  titleSmall: {
    ...title,
    fontSize: 12,
    lineHeight: 16,
  },
  titleNormal_reg: {
    ...normal,
    fontSize: 16,
    lineHeight: 24,
  },
  // paragraph
  bodyXLG: {
    ...normal,
    fontSize: 24,
    lineHeight: 32,
  },
  bodyLG: {
    ...normal,
    fontSize: 20,
    lineHeight: 32,
  },
  bodyNormal: {
    ...normal,
    fontSize: 16,
    lineHeight: 24,
  },
  bodySmall: {
    ...normal,
    fontSize: 14,
    lineHeight: 24,
  },
  bodySubText: {
    ...normal,
    fontSize: 16,
    lineHeight: 22,
  },
  bodySM: {
    ...normal,
    fontSize: 12,
    lineHeight: 24,
  },
  bodyXXS: {
    ...normal,
    fontSize: 10,
    lineHeight: 14,
  },
  bodyXS: {
    ...normal,
    fontSize: 10,
    lineHeight: 16,
  },
  subTitle1: {
    ...title,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
  },
  label: {
    ...title,
    fontSize: 12,
    lineHeight: 16,
  },
  listLabel: {
    ...title,
    fontSize: 12,
    lineHeight: 24,
  },
  caption: {
    ...normal,
    fontSize: 12,
    lineHeight: 16,
  },
  tabText: {
    ...normal,
    fontSize: 10,
    lineHeight: 16,
  },
  subTitle2: {
    ...title,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 20,
  },
  subTitleCell: {
    ...normal,
    fontSize: 14,
    lineHeight: 18,
  },
  mini: {
    ...normal,
    fontSize: 12,
    lineHeight: 16,
  },
  tagText: {
    ...normal,
    fontSize: 8,
    lineHeight: 12,
  },
  bodyNormal_Input: {
    fontFamily: 'Vazir-FD-WOL',
    fontSize: 16,
    lineHeight: 24,
  },
  bold: {
    fontFamily: 'Vazir-Black-FD-WOL',
  },
};

export default StyleSheet.create(styles);
