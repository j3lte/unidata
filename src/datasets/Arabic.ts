import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

/**
 * _Unicode Dataset:_ **Arabic**
 *
 * _Unicode Version:_ **16.0.0**
 *
 * _Start Code:_ **1536**
 *
 * _End Code:_ **1791**
 *
 * _Total Characters:_ **256**
 */
export const dataSet: CharacterSet = {
  blockName: CharacterSetType.Arabic,
  startCode: 1536,
  endCode: 1791,
  characters: [
    { "code": 1536, "name": "ARABIC NUMBER SIGN", "cat": "Cf", "bidi": "AN" },
    { "code": 1537, "name": "ARABIC SIGN SANAH", "cat": "Cf", "bidi": "AN" },
    { "code": 1538, "name": "ARABIC FOOTNOTE MARKER", "cat": "Cf", "bidi": "AN" },
    { "code": 1539, "name": "ARABIC SIGN SAFHA", "cat": "Cf", "bidi": "AN" },
    { "code": 1540, "name": "ARABIC SIGN SAMVAT", "cat": "Cf", "bidi": "AN" },
    { "code": 1541, "name": "ARABIC NUMBER MARK ABOVE", "cat": "Cf", "bidi": "AN" },
    { "code": 1542, "name": "ARABIC-INDIC CUBE ROOT", "cat": "Sm", "bidi": "ON" },
    { "code": 1543, "name": "ARABIC-INDIC FOURTH ROOT", "cat": "Sm", "bidi": "ON" },
    { "code": 1544, "name": "ARABIC RAY", "cat": "Sm", "bidi": "AL" },
    { "code": 1545, "name": "ARABIC-INDIC PER MILLE SIGN", "cat": "Po", "bidi": "ET" },
    { "code": 1546, "name": "ARABIC-INDIC PER TEN THOUSAND SIGN", "cat": "Po", "bidi": "ET" },
    { "code": 1547, "name": "AFGHANI SIGN", "cat": "Sc", "bidi": "AL" },
    { "code": 1548, "name": "ARABIC COMMA", "cat": "Po", "bidi": "CS" },
    { "code": 1549, "name": "ARABIC DATE SEPARATOR", "cat": "Po", "bidi": "AL" },
    { "code": 1550, "name": "ARABIC POETIC VERSE SIGN", "cat": "So", "bidi": "ON" },
    { "code": 1551, "name": "ARABIC SIGN MISRA", "cat": "So", "bidi": "ON" },
    { "code": 1552, "name": "ARABIC SIGN SALLALLAHOU ALAYHE WASSALLAM", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1553, "name": "ARABIC SIGN ALAYHE ASSALLAM", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1554, "name": "ARABIC SIGN RAHMATULLAH ALAYHE", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1555, "name": "ARABIC SIGN RADI ALLAHOU ANHU", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1556, "name": "ARABIC SIGN TAKHALLUS", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1557, "name": "ARABIC SMALL HIGH TAH", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    {
      "code": 1558,
      "name": "ARABIC SMALL HIGH LIGATURE ALEF WITH LAM WITH YEH",
      "cat": "Mn",
      "comb": 230,
      "bidi": "NSM",
    },
    { "code": 1559, "name": "ARABIC SMALL HIGH ZAIN", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1560, "name": "ARABIC SMALL FATHA", "cat": "Mn", "comb": 30, "bidi": "NSM" },
    { "code": 1561, "name": "ARABIC SMALL DAMMA", "cat": "Mn", "comb": 31, "bidi": "NSM" },
    { "code": 1562, "name": "ARABIC SMALL KASRA", "cat": "Mn", "comb": 32, "bidi": "NSM" },
    { "code": 1563, "name": "ARABIC SEMICOLON", "cat": "Po", "bidi": "AL" },
    { "code": 1564, "name": "ARABIC LETTER MARK", "cat": "Cf", "bidi": "AL" },
    { "code": 1565, "name": "ARABIC END OF TEXT MARK", "cat": "Po", "bidi": "AL" },
    { "code": 1566, "name": "ARABIC TRIPLE DOT PUNCTUATION MARK", "cat": "Po", "bidi": "AL" },
    { "code": 1567, "name": "ARABIC QUESTION MARK", "cat": "Po", "bidi": "AL" },
    { "code": 1568, "name": "ARABIC LETTER KASHMIRI YEH", "cat": "Lo", "bidi": "AL" },
    { "code": 1569, "name": "ARABIC LETTER HAMZA", "cat": "Lo", "bidi": "AL", "oldName": "ARABIC LETTER HAMZAH" },
    {
      "code": 1570,
      "name": "ARABIC LETTER ALEF WITH MADDA ABOVE",
      "cat": "Lo",
      "bidi": "AL",
      "decomp": [1575, 1619],
      "oldName": "ARABIC LETTER MADDAH ON ALEF",
    },
    {
      "code": 1571,
      "name": "ARABIC LETTER ALEF WITH HAMZA ABOVE",
      "cat": "Lo",
      "bidi": "AL",
      "decomp": [1575, 1620],
      "oldName": "ARABIC LETTER HAMZAH ON ALEF",
    },
    {
      "code": 1572,
      "name": "ARABIC LETTER WAW WITH HAMZA ABOVE",
      "cat": "Lo",
      "bidi": "AL",
      "decomp": [1608, 1620],
      "oldName": "ARABIC LETTER HAMZAH ON WAW",
    },
    {
      "code": 1573,
      "name": "ARABIC LETTER ALEF WITH HAMZA BELOW",
      "cat": "Lo",
      "bidi": "AL",
      "decomp": [1575, 1621],
      "oldName": "ARABIC LETTER HAMZAH UNDER ALEF",
    },
    {
      "code": 1574,
      "name": "ARABIC LETTER YEH WITH HAMZA ABOVE",
      "cat": "Lo",
      "bidi": "AL",
      "decomp": [1610, 1620],
      "oldName": "ARABIC LETTER HAMZAH ON YA",
    },
    { "code": 1575, "name": "ARABIC LETTER ALEF", "cat": "Lo", "bidi": "AL" },
    { "code": 1576, "name": "ARABIC LETTER BEH", "cat": "Lo", "bidi": "AL", "oldName": "ARABIC LETTER BAA" },
    {
      "code": 1577,
      "name": "ARABIC LETTER TEH MARBUTA",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER TAA MARBUTAH",
    },
    { "code": 1578, "name": "ARABIC LETTER TEH", "cat": "Lo", "bidi": "AL", "oldName": "ARABIC LETTER TAA" },
    { "code": 1579, "name": "ARABIC LETTER THEH", "cat": "Lo", "bidi": "AL", "oldName": "ARABIC LETTER THAA" },
    { "code": 1580, "name": "ARABIC LETTER JEEM", "cat": "Lo", "bidi": "AL" },
    { "code": 1581, "name": "ARABIC LETTER HAH", "cat": "Lo", "bidi": "AL", "oldName": "ARABIC LETTER HAA" },
    { "code": 1582, "name": "ARABIC LETTER KHAH", "cat": "Lo", "bidi": "AL", "oldName": "ARABIC LETTER KHAA" },
    { "code": 1583, "name": "ARABIC LETTER DAL", "cat": "Lo", "bidi": "AL" },
    { "code": 1584, "name": "ARABIC LETTER THAL", "cat": "Lo", "bidi": "AL" },
    { "code": 1585, "name": "ARABIC LETTER REH", "cat": "Lo", "bidi": "AL", "oldName": "ARABIC LETTER RA" },
    { "code": 1586, "name": "ARABIC LETTER ZAIN", "cat": "Lo", "bidi": "AL" },
    { "code": 1587, "name": "ARABIC LETTER SEEN", "cat": "Lo", "bidi": "AL" },
    { "code": 1588, "name": "ARABIC LETTER SHEEN", "cat": "Lo", "bidi": "AL" },
    { "code": 1589, "name": "ARABIC LETTER SAD", "cat": "Lo", "bidi": "AL" },
    { "code": 1590, "name": "ARABIC LETTER DAD", "cat": "Lo", "bidi": "AL" },
    { "code": 1591, "name": "ARABIC LETTER TAH", "cat": "Lo", "bidi": "AL" },
    { "code": 1592, "name": "ARABIC LETTER ZAH", "cat": "Lo", "bidi": "AL", "oldName": "ARABIC LETTER DHAH" },
    { "code": 1593, "name": "ARABIC LETTER AIN", "cat": "Lo", "bidi": "AL" },
    { "code": 1594, "name": "ARABIC LETTER GHAIN", "cat": "Lo", "bidi": "AL" },
    { "code": 1595, "name": "ARABIC LETTER KEHEH WITH TWO DOTS ABOVE", "cat": "Lo", "bidi": "AL" },
    { "code": 1596, "name": "ARABIC LETTER KEHEH WITH THREE DOTS BELOW", "cat": "Lo", "bidi": "AL" },
    { "code": 1597, "name": "ARABIC LETTER FARSI YEH WITH INVERTED V", "cat": "Lo", "bidi": "AL" },
    { "code": 1598, "name": "ARABIC LETTER FARSI YEH WITH TWO DOTS ABOVE", "cat": "Lo", "bidi": "AL" },
    { "code": 1599, "name": "ARABIC LETTER FARSI YEH WITH THREE DOTS ABOVE", "cat": "Lo", "bidi": "AL" },
    { "code": 1600, "name": "ARABIC TATWEEL", "cat": "Lm", "bidi": "AL" },
    { "code": 1601, "name": "ARABIC LETTER FEH", "cat": "Lo", "bidi": "AL", "oldName": "ARABIC LETTER FA" },
    { "code": 1602, "name": "ARABIC LETTER QAF", "cat": "Lo", "bidi": "AL" },
    { "code": 1603, "name": "ARABIC LETTER KAF", "cat": "Lo", "bidi": "AL", "oldName": "ARABIC LETTER CAF" },
    { "code": 1604, "name": "ARABIC LETTER LAM", "cat": "Lo", "bidi": "AL" },
    { "code": 1605, "name": "ARABIC LETTER MEEM", "cat": "Lo", "bidi": "AL" },
    { "code": 1606, "name": "ARABIC LETTER NOON", "cat": "Lo", "bidi": "AL" },
    { "code": 1607, "name": "ARABIC LETTER HEH", "cat": "Lo", "bidi": "AL", "oldName": "ARABIC LETTER HA" },
    { "code": 1608, "name": "ARABIC LETTER WAW", "cat": "Lo", "bidi": "AL" },
    {
      "code": 1609,
      "name": "ARABIC LETTER ALEF MAKSURA",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER ALEF MAQSURAH",
    },
    { "code": 1610, "name": "ARABIC LETTER YEH", "cat": "Lo", "bidi": "AL", "oldName": "ARABIC LETTER YA" },
    { "code": 1611, "name": "ARABIC FATHATAN", "cat": "Mn", "comb": 27, "bidi": "NSM" },
    { "code": 1612, "name": "ARABIC DAMMATAN", "cat": "Mn", "comb": 28, "bidi": "NSM" },
    { "code": 1613, "name": "ARABIC KASRATAN", "cat": "Mn", "comb": 29, "bidi": "NSM" },
    { "code": 1614, "name": "ARABIC FATHA", "cat": "Mn", "comb": 30, "bidi": "NSM", "oldName": "ARABIC FATHAH" },
    { "code": 1615, "name": "ARABIC DAMMA", "cat": "Mn", "comb": 31, "bidi": "NSM", "oldName": "ARABIC DAMMAH" },
    { "code": 1616, "name": "ARABIC KASRA", "cat": "Mn", "comb": 32, "bidi": "NSM", "oldName": "ARABIC KASRAH" },
    { "code": 1617, "name": "ARABIC SHADDA", "cat": "Mn", "comb": 33, "bidi": "NSM", "oldName": "ARABIC SHADDAH" },
    { "code": 1618, "name": "ARABIC SUKUN", "cat": "Mn", "comb": 34, "bidi": "NSM" },
    { "code": 1619, "name": "ARABIC MADDAH ABOVE", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1620, "name": "ARABIC HAMZA ABOVE", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1621, "name": "ARABIC HAMZA BELOW", "cat": "Mn", "comb": 220, "bidi": "NSM" },
    { "code": 1622, "name": "ARABIC SUBSCRIPT ALEF", "cat": "Mn", "comb": 220, "bidi": "NSM" },
    { "code": 1623, "name": "ARABIC INVERTED DAMMA", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1624, "name": "ARABIC MARK NOON GHUNNA", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1625, "name": "ARABIC ZWARAKAY", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1626, "name": "ARABIC VOWEL SIGN SMALL V ABOVE", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1627, "name": "ARABIC VOWEL SIGN INVERTED SMALL V ABOVE", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1628, "name": "ARABIC VOWEL SIGN DOT BELOW", "cat": "Mn", "comb": 220, "bidi": "NSM" },
    { "code": 1629, "name": "ARABIC REVERSED DAMMA", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1630, "name": "ARABIC FATHA WITH TWO DOTS", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1631, "name": "ARABIC WAVY HAMZA BELOW", "cat": "Mn", "comb": 220, "bidi": "NSM" },
    { "code": 1632, "name": "ARABIC-INDIC DIGIT ZERO", "cat": "Nd", "bidi": "AN", "num": "0" },
    { "code": 1633, "name": "ARABIC-INDIC DIGIT ONE", "cat": "Nd", "bidi": "AN", "num": "1" },
    { "code": 1634, "name": "ARABIC-INDIC DIGIT TWO", "cat": "Nd", "bidi": "AN", "num": "2" },
    { "code": 1635, "name": "ARABIC-INDIC DIGIT THREE", "cat": "Nd", "bidi": "AN", "num": "3" },
    { "code": 1636, "name": "ARABIC-INDIC DIGIT FOUR", "cat": "Nd", "bidi": "AN", "num": "4" },
    { "code": 1637, "name": "ARABIC-INDIC DIGIT FIVE", "cat": "Nd", "bidi": "AN", "num": "5" },
    { "code": 1638, "name": "ARABIC-INDIC DIGIT SIX", "cat": "Nd", "bidi": "AN", "num": "6" },
    { "code": 1639, "name": "ARABIC-INDIC DIGIT SEVEN", "cat": "Nd", "bidi": "AN", "num": "7" },
    { "code": 1640, "name": "ARABIC-INDIC DIGIT EIGHT", "cat": "Nd", "bidi": "AN", "num": "8" },
    { "code": 1641, "name": "ARABIC-INDIC DIGIT NINE", "cat": "Nd", "bidi": "AN", "num": "9" },
    { "code": 1642, "name": "ARABIC PERCENT SIGN", "cat": "Po", "bidi": "ET" },
    { "code": 1643, "name": "ARABIC DECIMAL SEPARATOR", "cat": "Po", "bidi": "AN" },
    { "code": 1644, "name": "ARABIC THOUSANDS SEPARATOR", "cat": "Po", "bidi": "AN" },
    { "code": 1645, "name": "ARABIC FIVE POINTED STAR", "cat": "Po", "bidi": "AL" },
    { "code": 1646, "name": "ARABIC LETTER DOTLESS BEH", "cat": "Lo", "bidi": "AL" },
    { "code": 1647, "name": "ARABIC LETTER DOTLESS QAF", "cat": "Lo", "bidi": "AL" },
    {
      "code": 1648,
      "name": "ARABIC LETTER SUPERSCRIPT ALEF",
      "cat": "Mn",
      "comb": 35,
      "bidi": "NSM",
      "oldName": "ARABIC ALEF ABOVE",
    },
    {
      "code": 1649,
      "name": "ARABIC LETTER ALEF WASLA",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER HAMZAT WASL ON ALEF",
    },
    {
      "code": 1650,
      "name": "ARABIC LETTER ALEF WITH WAVY HAMZA ABOVE",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER WAVY HAMZAH ON ALEF",
    },
    {
      "code": 1651,
      "name": "ARABIC LETTER ALEF WITH WAVY HAMZA BELOW",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER WAVY HAMZAH UNDER ALEF",
    },
    {
      "code": 1652,
      "name": "ARABIC LETTER HIGH HAMZA",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER HIGH HAMZAH",
    },
    {
      "code": 1653,
      "name": "ARABIC LETTER HIGH HAMZA ALEF",
      "cat": "Lo",
      "bidi": "AL",
      "decomp": [1575, 1652],
      "decompType": "compat",
      "oldName": "ARABIC LETTER HIGH HAMZAH ALEF",
    },
    {
      "code": 1654,
      "name": "ARABIC LETTER HIGH HAMZA WAW",
      "cat": "Lo",
      "bidi": "AL",
      "decomp": [1608, 1652],
      "decompType": "compat",
      "oldName": "ARABIC LETTER HIGH HAMZAH WAW",
    },
    {
      "code": 1655,
      "name": "ARABIC LETTER U WITH HAMZA ABOVE",
      "cat": "Lo",
      "bidi": "AL",
      "decomp": [1735, 1652],
      "decompType": "compat",
      "oldName": "ARABIC LETTER HIGH HAMZAH WAW WITH DAMMAH",
    },
    {
      "code": 1656,
      "name": "ARABIC LETTER HIGH HAMZA YEH",
      "cat": "Lo",
      "bidi": "AL",
      "decomp": [1610, 1652],
      "decompType": "compat",
      "oldName": "ARABIC LETTER HIGH HAMZAH YA",
    },
    {
      "code": 1657,
      "name": "ARABIC LETTER TTEH",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER TAA WITH SMALL TAH",
    },
    {
      "code": 1658,
      "name": "ARABIC LETTER TTEHEH",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER TAA WITH TWO DOTS VERTICAL ABOVE",
    },
    {
      "code": 1659,
      "name": "ARABIC LETTER BEEH",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER BAA WITH TWO DOTS VERTICAL BELOW",
    },
    {
      "code": 1660,
      "name": "ARABIC LETTER TEH WITH RING",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER TAA WITH RING",
    },
    {
      "code": 1661,
      "name": "ARABIC LETTER TEH WITH THREE DOTS ABOVE DOWNWARDS",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER TAA WITH THREE DOTS ABOVE DOWNWARD",
    },
    {
      "code": 1662,
      "name": "ARABIC LETTER PEH",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER TAA WITH THREE DOTS BELOW",
    },
    {
      "code": 1663,
      "name": "ARABIC LETTER TEHEH",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER TAA WITH FOUR DOTS ABOVE",
    },
    {
      "code": 1664,
      "name": "ARABIC LETTER BEHEH",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER BAA WITH FOUR DOTS BELOW",
    },
    {
      "code": 1665,
      "name": "ARABIC LETTER HAH WITH HAMZA ABOVE",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER HAMZAH ON HAA",
    },
    {
      "code": 1666,
      "name": "ARABIC LETTER HAH WITH TWO DOTS VERTICAL ABOVE",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER HAA WITH TWO DOTS VERTICAL ABOVE",
    },
    {
      "code": 1667,
      "name": "ARABIC LETTER NYEH",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER HAA WITH MIDDLE TWO DOTS",
    },
    {
      "code": 1668,
      "name": "ARABIC LETTER DYEH",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER HAA WITH MIDDLE TWO DOTS VERTICAL",
    },
    {
      "code": 1669,
      "name": "ARABIC LETTER HAH WITH THREE DOTS ABOVE",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER HAA WITH THREE DOTS ABOVE",
    },
    {
      "code": 1670,
      "name": "ARABIC LETTER TCHEH",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER HAA WITH MIDDLE THREE DOTS DOWNWARD",
    },
    {
      "code": 1671,
      "name": "ARABIC LETTER TCHEHEH",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER HAA WITH MIDDLE FOUR DOTS",
    },
    {
      "code": 1672,
      "name": "ARABIC LETTER DDAL",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER DAL WITH SMALL TAH",
    },
    { "code": 1673, "name": "ARABIC LETTER DAL WITH RING", "cat": "Lo", "bidi": "AL" },
    { "code": 1674, "name": "ARABIC LETTER DAL WITH DOT BELOW", "cat": "Lo", "bidi": "AL" },
    { "code": 1675, "name": "ARABIC LETTER DAL WITH DOT BELOW AND SMALL TAH", "cat": "Lo", "bidi": "AL" },
    {
      "code": 1676,
      "name": "ARABIC LETTER DAHAL",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER DAL WITH TWO DOTS ABOVE",
    },
    {
      "code": 1677,
      "name": "ARABIC LETTER DDAHAL",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER DAL WITH TWO DOTS BELOW",
    },
    {
      "code": 1678,
      "name": "ARABIC LETTER DUL",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER DAL WITH THREE DOTS ABOVE",
    },
    {
      "code": 1679,
      "name": "ARABIC LETTER DAL WITH THREE DOTS ABOVE DOWNWARDS",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER DAL WITH THREE DOTS ABOVE DOWNWARD",
    },
    { "code": 1680, "name": "ARABIC LETTER DAL WITH FOUR DOTS ABOVE", "cat": "Lo", "bidi": "AL" },
    {
      "code": 1681,
      "name": "ARABIC LETTER RREH",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER RA WITH SMALL TAH",
    },
    {
      "code": 1682,
      "name": "ARABIC LETTER REH WITH SMALL V",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER RA WITH SMALL V",
    },
    {
      "code": 1683,
      "name": "ARABIC LETTER REH WITH RING",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER RA WITH RING",
    },
    {
      "code": 1684,
      "name": "ARABIC LETTER REH WITH DOT BELOW",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER RA WITH DOT BELOW",
    },
    {
      "code": 1685,
      "name": "ARABIC LETTER REH WITH SMALL V BELOW",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER RA WITH SMALL V BELOW",
    },
    {
      "code": 1686,
      "name": "ARABIC LETTER REH WITH DOT BELOW AND DOT ABOVE",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER RA WITH DOT BELOW AND DOT ABOVE",
    },
    {
      "code": 1687,
      "name": "ARABIC LETTER REH WITH TWO DOTS ABOVE",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER RA WITH TWO DOTS ABOVE",
    },
    {
      "code": 1688,
      "name": "ARABIC LETTER JEH",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER RA WITH THREE DOTS ABOVE",
    },
    {
      "code": 1689,
      "name": "ARABIC LETTER REH WITH FOUR DOTS ABOVE",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER RA WITH FOUR DOTS ABOVE",
    },
    { "code": 1690, "name": "ARABIC LETTER SEEN WITH DOT BELOW AND DOT ABOVE", "cat": "Lo", "bidi": "AL" },
    { "code": 1691, "name": "ARABIC LETTER SEEN WITH THREE DOTS BELOW", "cat": "Lo", "bidi": "AL" },
    {
      "code": 1692,
      "name": "ARABIC LETTER SEEN WITH THREE DOTS BELOW AND THREE DOTS ABOVE",
      "cat": "Lo",
      "bidi": "AL",
    },
    { "code": 1693, "name": "ARABIC LETTER SAD WITH TWO DOTS BELOW", "cat": "Lo", "bidi": "AL" },
    { "code": 1694, "name": "ARABIC LETTER SAD WITH THREE DOTS ABOVE", "cat": "Lo", "bidi": "AL" },
    { "code": 1695, "name": "ARABIC LETTER TAH WITH THREE DOTS ABOVE", "cat": "Lo", "bidi": "AL" },
    { "code": 1696, "name": "ARABIC LETTER AIN WITH THREE DOTS ABOVE", "cat": "Lo", "bidi": "AL" },
    {
      "code": 1697,
      "name": "ARABIC LETTER DOTLESS FEH",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER DOTLESS FA",
    },
    {
      "code": 1698,
      "name": "ARABIC LETTER FEH WITH DOT MOVED BELOW",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER FA WITH DOT MOVED BELOW",
    },
    {
      "code": 1699,
      "name": "ARABIC LETTER FEH WITH DOT BELOW",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER FA WITH DOT BELOW",
    },
    {
      "code": 1700,
      "name": "ARABIC LETTER VEH",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER FA WITH THREE DOTS ABOVE",
    },
    {
      "code": 1701,
      "name": "ARABIC LETTER FEH WITH THREE DOTS BELOW",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER FA WITH THREE DOTS BELOW",
    },
    {
      "code": 1702,
      "name": "ARABIC LETTER PEHEH",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER FA WITH FOUR DOTS ABOVE",
    },
    { "code": 1703, "name": "ARABIC LETTER QAF WITH DOT ABOVE", "cat": "Lo", "bidi": "AL" },
    { "code": 1704, "name": "ARABIC LETTER QAF WITH THREE DOTS ABOVE", "cat": "Lo", "bidi": "AL" },
    { "code": 1705, "name": "ARABIC LETTER KEHEH", "cat": "Lo", "bidi": "AL", "oldName": "ARABIC LETTER OPEN CAF" },
    {
      "code": 1706,
      "name": "ARABIC LETTER SWASH KAF",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER SWASH CAF",
    },
    {
      "code": 1707,
      "name": "ARABIC LETTER KAF WITH RING",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER CAF WITH RING",
    },
    {
      "code": 1708,
      "name": "ARABIC LETTER KAF WITH DOT ABOVE",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER CAF WITH DOT ABOVE",
    },
    {
      "code": 1709,
      "name": "ARABIC LETTER NG",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER CAF WITH THREE DOTS ABOVE",
    },
    {
      "code": 1710,
      "name": "ARABIC LETTER KAF WITH THREE DOTS BELOW",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER CAF WITH THREE DOTS BELOW",
    },
    { "code": 1711, "name": "ARABIC LETTER GAF", "cat": "Lo", "bidi": "AL" },
    { "code": 1712, "name": "ARABIC LETTER GAF WITH RING", "cat": "Lo", "bidi": "AL" },
    {
      "code": 1713,
      "name": "ARABIC LETTER NGOEH",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER GAF WITH TWO DOTS ABOVE",
    },
    { "code": 1714, "name": "ARABIC LETTER GAF WITH TWO DOTS BELOW", "cat": "Lo", "bidi": "AL" },
    {
      "code": 1715,
      "name": "ARABIC LETTER GUEH",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER GAF WITH TWO DOTS VERTICAL BELOW",
    },
    { "code": 1716, "name": "ARABIC LETTER GAF WITH THREE DOTS ABOVE", "cat": "Lo", "bidi": "AL" },
    { "code": 1717, "name": "ARABIC LETTER LAM WITH SMALL V", "cat": "Lo", "bidi": "AL" },
    { "code": 1718, "name": "ARABIC LETTER LAM WITH DOT ABOVE", "cat": "Lo", "bidi": "AL" },
    { "code": 1719, "name": "ARABIC LETTER LAM WITH THREE DOTS ABOVE", "cat": "Lo", "bidi": "AL" },
    { "code": 1720, "name": "ARABIC LETTER LAM WITH THREE DOTS BELOW", "cat": "Lo", "bidi": "AL" },
    { "code": 1721, "name": "ARABIC LETTER NOON WITH DOT BELOW", "cat": "Lo", "bidi": "AL" },
    {
      "code": 1722,
      "name": "ARABIC LETTER NOON GHUNNA",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER DOTLESS NOON",
    },
    {
      "code": 1723,
      "name": "ARABIC LETTER RNOON",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER DOTLESS NOON WITH SMALL TAH",
    },
    { "code": 1724, "name": "ARABIC LETTER NOON WITH RING", "cat": "Lo", "bidi": "AL" },
    { "code": 1725, "name": "ARABIC LETTER NOON WITH THREE DOTS ABOVE", "cat": "Lo", "bidi": "AL" },
    {
      "code": 1726,
      "name": "ARABIC LETTER HEH DOACHASHMEE",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER KNOTTED HA",
    },
    { "code": 1727, "name": "ARABIC LETTER TCHEH WITH DOT ABOVE", "cat": "Lo", "bidi": "AL" },
    {
      "code": 1728,
      "name": "ARABIC LETTER HEH WITH YEH ABOVE",
      "cat": "Lo",
      "bidi": "AL",
      "decomp": [1749, 1620],
      "oldName": "ARABIC LETTER HAMZAH ON HA",
    },
    { "code": 1729, "name": "ARABIC LETTER HEH GOAL", "cat": "Lo", "bidi": "AL", "oldName": "ARABIC LETTER HA GOAL" },
    {
      "code": 1730,
      "name": "ARABIC LETTER HEH GOAL WITH HAMZA ABOVE",
      "cat": "Lo",
      "bidi": "AL",
      "decomp": [1729, 1620],
      "oldName": "ARABIC LETTER HAMZAH ON HA GOAL",
    },
    {
      "code": 1731,
      "name": "ARABIC LETTER TEH MARBUTA GOAL",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER TAA MARBUTAH GOAL",
    },
    { "code": 1732, "name": "ARABIC LETTER WAW WITH RING", "cat": "Lo", "bidi": "AL" },
    {
      "code": 1733,
      "name": "ARABIC LETTER KIRGHIZ OE",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER WAW WITH BAR",
    },
    {
      "code": 1734,
      "name": "ARABIC LETTER OE",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER WAW WITH SMALL V",
    },
    { "code": 1735, "name": "ARABIC LETTER U", "cat": "Lo", "bidi": "AL", "oldName": "ARABIC LETTER WAW WITH DAMMAH" },
    {
      "code": 1736,
      "name": "ARABIC LETTER YU",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER WAW WITH ALEF ABOVE",
    },
    {
      "code": 1737,
      "name": "ARABIC LETTER KIRGHIZ YU",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER WAW WITH INVERTED SMALL V",
    },
    { "code": 1738, "name": "ARABIC LETTER WAW WITH TWO DOTS ABOVE", "cat": "Lo", "bidi": "AL" },
    {
      "code": 1739,
      "name": "ARABIC LETTER VE",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER WAW WITH THREE DOTS ABOVE",
    },
    {
      "code": 1740,
      "name": "ARABIC LETTER FARSI YEH",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER DOTLESS YA",
    },
    {
      "code": 1741,
      "name": "ARABIC LETTER YEH WITH TAIL",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER YA WITH TAIL",
    },
    {
      "code": 1742,
      "name": "ARABIC LETTER YEH WITH SMALL V",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER YA WITH SMALL V",
    },
    { "code": 1743, "name": "ARABIC LETTER WAW WITH DOT ABOVE", "cat": "Lo", "bidi": "AL" },
    {
      "code": 1744,
      "name": "ARABIC LETTER E",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER YA WITH TWO DOTS VERTICAL BELOW",
    },
    {
      "code": 1745,
      "name": "ARABIC LETTER YEH WITH THREE DOTS BELOW",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER YA WITH THREE DOTS BELOW",
    },
    {
      "code": 1746,
      "name": "ARABIC LETTER YEH BARREE",
      "cat": "Lo",
      "bidi": "AL",
      "oldName": "ARABIC LETTER YA BARREE",
    },
    {
      "code": 1747,
      "name": "ARABIC LETTER YEH BARREE WITH HAMZA ABOVE",
      "cat": "Lo",
      "bidi": "AL",
      "decomp": [1746, 1620],
      "oldName": "ARABIC LETTER HAMZAH ON YA BARREE",
    },
    { "code": 1748, "name": "ARABIC FULL STOP", "cat": "Po", "bidi": "AL", "oldName": "ARABIC PERIOD" },
    { "code": 1749, "name": "ARABIC LETTER AE", "cat": "Lo", "bidi": "AL" },
    {
      "code": 1750,
      "name": "ARABIC SMALL HIGH LIGATURE SAD WITH LAM WITH ALEF MAKSURA",
      "cat": "Mn",
      "comb": 230,
      "bidi": "NSM",
    },
    {
      "code": 1751,
      "name": "ARABIC SMALL HIGH LIGATURE QAF WITH LAM WITH ALEF MAKSURA",
      "cat": "Mn",
      "comb": 230,
      "bidi": "NSM",
    },
    { "code": 1752, "name": "ARABIC SMALL HIGH MEEM INITIAL FORM", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1753, "name": "ARABIC SMALL HIGH LAM ALEF", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1754, "name": "ARABIC SMALL HIGH JEEM", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1755, "name": "ARABIC SMALL HIGH THREE DOTS", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1756, "name": "ARABIC SMALL HIGH SEEN", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1757, "name": "ARABIC END OF AYAH", "cat": "Cf", "bidi": "AN" },
    { "code": 1758, "name": "ARABIC START OF RUB EL HIZB", "cat": "So", "bidi": "ON" },
    { "code": 1759, "name": "ARABIC SMALL HIGH ROUNDED ZERO", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1760, "name": "ARABIC SMALL HIGH UPRIGHT RECTANGULAR ZERO", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1761, "name": "ARABIC SMALL HIGH DOTLESS HEAD OF KHAH", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1762, "name": "ARABIC SMALL HIGH MEEM ISOLATED FORM", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1763, "name": "ARABIC SMALL LOW SEEN", "cat": "Mn", "comb": 220, "bidi": "NSM" },
    { "code": 1764, "name": "ARABIC SMALL HIGH MADDA", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1765, "name": "ARABIC SMALL WAW", "cat": "Lm", "bidi": "AL" },
    { "code": 1766, "name": "ARABIC SMALL YEH", "cat": "Lm", "bidi": "AL" },
    { "code": 1767, "name": "ARABIC SMALL HIGH YEH", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1768, "name": "ARABIC SMALL HIGH NOON", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1769, "name": "ARABIC PLACE OF SAJDAH", "cat": "So", "bidi": "ON" },
    { "code": 1770, "name": "ARABIC EMPTY CENTRE LOW STOP", "cat": "Mn", "comb": 220, "bidi": "NSM" },
    { "code": 1771, "name": "ARABIC EMPTY CENTRE HIGH STOP", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1772, "name": "ARABIC ROUNDED HIGH STOP WITH FILLED CENTRE", "cat": "Mn", "comb": 230, "bidi": "NSM" },
    { "code": 1773, "name": "ARABIC SMALL LOW MEEM", "cat": "Mn", "comb": 220, "bidi": "NSM" },
    { "code": 1774, "name": "ARABIC LETTER DAL WITH INVERTED V", "cat": "Lo", "bidi": "AL" },
    { "code": 1775, "name": "ARABIC LETTER REH WITH INVERTED V", "cat": "Lo", "bidi": "AL" },
    {
      "code": 1776,
      "name": "EXTENDED ARABIC-INDIC DIGIT ZERO",
      "cat": "Nd",
      "bidi": "EN",
      "num": "0",
      "oldName": "EASTERN ARABIC-INDIC DIGIT ZERO",
    },
    {
      "code": 1777,
      "name": "EXTENDED ARABIC-INDIC DIGIT ONE",
      "cat": "Nd",
      "bidi": "EN",
      "num": "1",
      "oldName": "EASTERN ARABIC-INDIC DIGIT ONE",
    },
    {
      "code": 1778,
      "name": "EXTENDED ARABIC-INDIC DIGIT TWO",
      "cat": "Nd",
      "bidi": "EN",
      "num": "2",
      "oldName": "EASTERN ARABIC-INDIC DIGIT TWO",
    },
    {
      "code": 1779,
      "name": "EXTENDED ARABIC-INDIC DIGIT THREE",
      "cat": "Nd",
      "bidi": "EN",
      "num": "3",
      "oldName": "EASTERN ARABIC-INDIC DIGIT THREE",
    },
    {
      "code": 1780,
      "name": "EXTENDED ARABIC-INDIC DIGIT FOUR",
      "cat": "Nd",
      "bidi": "EN",
      "num": "4",
      "oldName": "EASTERN ARABIC-INDIC DIGIT FOUR",
    },
    {
      "code": 1781,
      "name": "EXTENDED ARABIC-INDIC DIGIT FIVE",
      "cat": "Nd",
      "bidi": "EN",
      "num": "5",
      "oldName": "EASTERN ARABIC-INDIC DIGIT FIVE",
    },
    {
      "code": 1782,
      "name": "EXTENDED ARABIC-INDIC DIGIT SIX",
      "cat": "Nd",
      "bidi": "EN",
      "num": "6",
      "oldName": "EASTERN ARABIC-INDIC DIGIT SIX",
    },
    {
      "code": 1783,
      "name": "EXTENDED ARABIC-INDIC DIGIT SEVEN",
      "cat": "Nd",
      "bidi": "EN",
      "num": "7",
      "oldName": "EASTERN ARABIC-INDIC DIGIT SEVEN",
    },
    {
      "code": 1784,
      "name": "EXTENDED ARABIC-INDIC DIGIT EIGHT",
      "cat": "Nd",
      "bidi": "EN",
      "num": "8",
      "oldName": "EASTERN ARABIC-INDIC DIGIT EIGHT",
    },
    {
      "code": 1785,
      "name": "EXTENDED ARABIC-INDIC DIGIT NINE",
      "cat": "Nd",
      "bidi": "EN",
      "num": "9",
      "oldName": "EASTERN ARABIC-INDIC DIGIT NINE",
    },
    { "code": 1786, "name": "ARABIC LETTER SHEEN WITH DOT BELOW", "cat": "Lo", "bidi": "AL" },
    { "code": 1787, "name": "ARABIC LETTER DAD WITH DOT BELOW", "cat": "Lo", "bidi": "AL" },
    { "code": 1788, "name": "ARABIC LETTER GHAIN WITH DOT BELOW", "cat": "Lo", "bidi": "AL" },
    { "code": 1789, "name": "ARABIC SIGN SINDHI AMPERSAND", "cat": "So", "bidi": "AL" },
    { "code": 1790, "name": "ARABIC SIGN SINDHI POSTPOSITION MEN", "cat": "So", "bidi": "AL" },
    { "code": 1791, "name": "ARABIC LETTER HEH WITH INVERTED V", "cat": "Lo", "bidi": "AL" },
  ],
};
