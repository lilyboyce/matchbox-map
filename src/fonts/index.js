import GraphikRegular from "./Graphik-Regular.woff";
import GraphikSemibold from "./Graphik-Seimbold.otf";
import GraphikMedium from "./Graphik-Medium.otf";
import AlkalineRegular from "./AlkalineRegular.otf";
import AlkalineMedium from "./AlkalineMedium.otf";

const fonts = {
  "@font-face": [
    {
      fontFamily: "Alkaline",
      src: `url('${AlkalineRegular}') format("opentype")`,
      fontStyle: "normal",
      fontDisplay: "swap",
    },
    {
      fontFamily: "Alkaline",
      src: `url('${AlkalineMedium}') format("opentype")`,
      fontStyle: "normal",
      fontDisplay: "swap",
    },
    {
      fontFamily: "Graphik",
      src: `url('${GraphikRegular}') format("woff")`,
      fontStyle: "normal",
      fontDisplay: "swap",
    },
    {
      fontFamily: "Graphik",
      src: `url('${GraphikSemibold}') format("opentype")`,
      fontStyle: "normal",
      fontDisplay: "swap",
    },
    {
      fontFamily: "Graphik",
      src: `url('${GraphikMedium}') format("opentype")`,
      fontStyle: "normal",
      fontDisplay: "swap",
    },
  ],
};
export default fonts;
