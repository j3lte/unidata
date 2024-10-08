import type { CharacterSet } from "../types.ts";
import { CharacterSetType } from "../enums.ts";

import {
  Adlam,
  Aegean_Numbers,
  Ahom,
  Alchemical_Symbols,
  Alphabetic_Presentation_Forms,
  Anatolian_Hieroglyphs,
  Ancient_Greek_Musical_Notation,
  Ancient_Greek_Numbers,
  Ancient_Symbols,
  Arabic,
  Arabic_Extended_A,
  Arabic_Extended_B,
  Arabic_Extended_C,
  Arabic_Mathematical_Alphabetic_Symbols,
  Arabic_Presentation_Forms_A,
  Arabic_Presentation_Forms_B,
  Arabic_Supplement,
  Armenian,
  Arrows,
  Avestan,
  Balinese,
  Bamum,
  Bamum_Supplement,
  Basic_Latin,
  Bassa_Vah,
  Batak,
  Bengali,
  Bhaiksuki,
  Block_Elements,
  Bopomofo,
  Bopomofo_Extended,
  Box_Drawing,
  Brahmi,
  Braille_Patterns,
  Buginese,
  Buhid,
  Byzantine_Musical_Symbols,
  Carian,
  Caucasian_Albanian,
  Chakma,
  Cham,
  Cherokee,
  Cherokee_Supplement,
  Chess_Symbols,
  Chorasmian,
  CJK_Compatibility,
  CJK_Compatibility_Forms,
  CJK_Compatibility_Ideographs,
  CJK_Compatibility_Ideographs_Supplement,
  CJK_Radicals_Supplement,
  CJK_Strokes,
  CJK_Symbols_and_Punctuation,
  CJK_Unified_Ideographs,
  CJK_Unified_Ideographs_Extension_A,
  CJK_Unified_Ideographs_Extension_B,
  CJK_Unified_Ideographs_Extension_C,
  CJK_Unified_Ideographs_Extension_D,
  CJK_Unified_Ideographs_Extension_E,
  CJK_Unified_Ideographs_Extension_F,
  CJK_Unified_Ideographs_Extension_G,
  CJK_Unified_Ideographs_Extension_H,
  CJK_Unified_Ideographs_Extension_I,
  Combining_Diacritical_Marks,
  Combining_Diacritical_Marks_Extended,
  Combining_Diacritical_Marks_for_Symbols,
  Combining_Diacritical_Marks_Supplement,
  Combining_Half_Marks,
  Common_Indic_Number_Forms,
  Control_Pictures,
  Coptic,
  Coptic_Epact_Numbers,
  Counting_Rod_Numerals,
  Cuneiform,
  Cuneiform_Numbers_and_Punctuation,
  Currency_Symbols,
  Cypriot_Syllabary,
  Cypro_Minoan,
  Cyrillic,
  Cyrillic_Extended_A,
  Cyrillic_Extended_B,
  Cyrillic_Extended_C,
  Cyrillic_Extended_D,
  Cyrillic_Supplement,
  Deseret,
  Devanagari,
  Devanagari_Extended,
  Devanagari_Extended_A,
  Dingbats,
  Dives_Akuru,
  Dogra,
  Domino_Tiles,
  Duployan,
  Early_Dynastic_Cuneiform,
  Egyptian_Hieroglyph_Format_Controls,
  Egyptian_Hieroglyphs,
  Egyptian_Hieroglyphs_Extended_A,
  Elbasan,
  Elymaic,
  Emoticons,
  Enclosed_Alphanumeric_Supplement,
  Enclosed_Alphanumerics,
  Enclosed_CJK_Letters_and_Months,
  Enclosed_Ideographic_Supplement,
  Ethiopic,
  Ethiopic_Extended,
  Ethiopic_Extended_A,
  Ethiopic_Extended_B,
  Ethiopic_Supplement,
  Garay,
  General_Punctuation,
  Geometric_Shapes,
  Geometric_Shapes_Extended,
  Georgian,
  Georgian_Extended,
  Georgian_Supplement,
  Glagolitic,
  Glagolitic_Supplement,
  Gothic,
  Grantha,
  Greek_and_Coptic,
  Greek_Extended,
  Gujarati,
  Gunjala_Gondi,
  Gurmukhi,
  Gurung_Khema,
  Halfwidth_and_Fullwidth_Forms,
  Hangul_Compatibility_Jamo,
  Hangul_Jamo,
  Hangul_Jamo_Extended_A,
  Hangul_Jamo_Extended_B,
  Hangul_Syllables,
  Hanifi_Rohingya,
  Hanunoo,
  Hatran,
  Hebrew,
  High_Private_Use_Surrogates,
  High_Surrogates,
  Hiragana,
  Ideographic_Description_Characters,
  Ideographic_Symbols_and_Punctuation,
  Imperial_Aramaic,
  Indic_Siyaq_Numbers,
  Inscriptional_Pahlavi,
  Inscriptional_Parthian,
  IPA_Extensions,
  Javanese,
  Kaithi,
  Kaktovik_Numerals,
  Kana_Extended_A,
  Kana_Extended_B,
  Kana_Supplement,
  Kanbun,
  Kangxi_Radicals,
  Kannada,
  Katakana,
  Katakana_Phonetic_Extensions,
  Kawi,
  Kayah_Li,
  Kharoshthi,
  Khitan_Small_Script,
  Khmer,
  Khmer_Symbols,
  Khojki,
  Khudawadi,
  Kirat_Rai,
  Lao,
  Latin_1_Supplement,
  Latin_Extended_A,
  Latin_Extended_Additional,
  Latin_Extended_B,
  Latin_Extended_C,
  Latin_Extended_D,
  Latin_Extended_E,
  Latin_Extended_F,
  Latin_Extended_G,
  Lepcha,
  Letterlike_Symbols,
  Limbu,
  Linear_A,
  Linear_B_Ideograms,
  Linear_B_Syllabary,
  Lisu,
  Lisu_Supplement,
  Low_Surrogates,
  Lycian,
  Lydian,
  Mahajani,
  Mahjong_Tiles,
  Makasar,
  Malayalam,
  Mandaic,
  Manichaean,
  Marchen,
  Masaram_Gondi,
  Mathematical_Alphanumeric_Symbols,
  Mathematical_Operators,
  Mayan_Numerals,
  Medefaidrin,
  Meetei_Mayek,
  Meetei_Mayek_Extensions,
  Mende_Kikakui,
  Meroitic_Cursive,
  Meroitic_Hieroglyphs,
  Miao,
  Miscellaneous_Mathematical_Symbols_A,
  Miscellaneous_Mathematical_Symbols_B,
  Miscellaneous_Symbols,
  Miscellaneous_Symbols_and_Arrows,
  Miscellaneous_Symbols_and_Pictographs,
  Miscellaneous_Technical,
  Modi,
  Modifier_Tone_Letters,
  Mongolian,
  Mongolian_Supplement,
  Mro,
  Multani,
  Musical_Symbols,
  Myanmar,
  Myanmar_Extended_A,
  Myanmar_Extended_B,
  Myanmar_Extended_C,
  Nabataean,
  Nag_Mundari,
  Nandinagari,
  New_Tai_Lue,
  Newa,
  NKo,
  Number_Forms,
  Nushu,
  Nyiakeng_Puachue_Hmong,
  Ogham,
  Ol_Chiki,
  Ol_Onal,
  Old_Hungarian,
  Old_Italic,
  Old_North_Arabian,
  Old_Permic,
  Old_Persian,
  Old_Sogdian,
  Old_South_Arabian,
  Old_Turkic,
  Old_Uyghur,
  Optical_Character_Recognition,
  Oriya,
  Ornamental_Dingbats,
  Osage,
  Osmanya,
  Ottoman_Siyaq_Numbers,
  Pahawh_Hmong,
  Palmyrene,
  Pau_Cin_Hau,
  Phags_pa,
  Phaistos_Disc,
  Phoenician,
  Phonetic_Extensions,
  Phonetic_Extensions_Supplement,
  Playing_Cards,
  Private_Use_Area,
  Psalter_Pahlavi,
  Rejang,
  Rumi_Numeral_Symbols,
  Runic,
  Samaritan,
  Saurashtra,
  Sharada,
  Shavian,
  Shorthand_Format_Controls,
  Siddham,
  Sinhala,
  Sinhala_Archaic_Numbers,
  Small_Form_Variants,
  Small_Kana_Extension,
  Sogdian,
  Sora_Sompeng,
  Soyombo,
  Spacing_Modifier_Letters,
  Specials,
  Sundanese,
  Sundanese_Supplement,
  Sunuwar,
  Superscripts_and_Subscripts,
  Supplemental_Arrows_A,
  Supplemental_Arrows_B,
  Supplemental_Arrows_C,
  Supplemental_Mathematical_Operators,
  Supplemental_Punctuation,
  Supplemental_Symbols_and_Pictographs,
  Supplementary_Private_Use_Area_A,
  Supplementary_Private_Use_Area_B,
  Sutton_SignWriting,
  Syloti_Nagri,
  Symbols_and_Pictographs_Extended_A,
  Symbols_for_Legacy_Computing,
  Symbols_for_Legacy_Computing_Supplement,
  Syriac,
  Syriac_Supplement,
  Tagalog,
  Tagbanwa,
  Tags,
  Tai_Le,
  Tai_Tham,
  Tai_Viet,
  Tai_Xuan_Jing_Symbols,
  Takri,
  Tamil,
  Tamil_Supplement,
  Tangsa,
  Tangut,
  Tangut_Components,
  Tangut_Supplement,
  Telugu,
  Thaana,
  Thai,
  Tibetan,
  Tifinagh,
  Tirhuta,
  Todhri,
  Toto,
  Transport_and_Map_Symbols,
  Tulu_Tigalari,
  Ugaritic,
  Unified_Canadian_Aboriginal_Syllabics,
  Unified_Canadian_Aboriginal_Syllabics_Extended,
  Unified_Canadian_Aboriginal_Syllabics_Extended_A,
  Vai,
  Variation_Selectors,
  Variation_Selectors_Supplement,
  Vedic_Extensions,
  Vertical_Forms,
  Vithkuqi,
  Wancho,
  Warang_Citi,
  Yezidi,
  Yi_Radicals,
  Yi_Syllables,
  Yijing_Hexagram_Symbols,
  Zanabazar_Square,
  Znamenny_Musical_Notation,
} from "./mod.ts";

/**
 * Character set data
 *
 * @internal
 */
export const data: Record<CharacterSetType, CharacterSet> = {
  [CharacterSetType.Basic_Latin]: Basic_Latin,
  [CharacterSetType.Latin_1_Supplement]: Latin_1_Supplement,
  [CharacterSetType.Latin_Extended_A]: Latin_Extended_A,
  [CharacterSetType.Latin_Extended_B]: Latin_Extended_B,
  [CharacterSetType.IPA_Extensions]: IPA_Extensions,
  [CharacterSetType.Spacing_Modifier_Letters]: Spacing_Modifier_Letters,
  [CharacterSetType.Combining_Diacritical_Marks]: Combining_Diacritical_Marks,
  [CharacterSetType.Greek_and_Coptic]: Greek_and_Coptic,
  [CharacterSetType.Cyrillic]: Cyrillic,
  [CharacterSetType.Cyrillic_Supplement]: Cyrillic_Supplement,
  [CharacterSetType.Armenian]: Armenian,
  [CharacterSetType.Hebrew]: Hebrew,
  [CharacterSetType.Arabic]: Arabic,
  [CharacterSetType.Syriac]: Syriac,
  [CharacterSetType.Arabic_Supplement]: Arabic_Supplement,
  [CharacterSetType.Thaana]: Thaana,
  [CharacterSetType.NKo]: NKo,
  [CharacterSetType.Samaritan]: Samaritan,
  [CharacterSetType.Mandaic]: Mandaic,
  [CharacterSetType.Syriac_Supplement]: Syriac_Supplement,
  [CharacterSetType.Arabic_Extended_B]: Arabic_Extended_B,
  [CharacterSetType.Arabic_Extended_A]: Arabic_Extended_A,
  [CharacterSetType.Devanagari]: Devanagari,
  [CharacterSetType.Bengali]: Bengali,
  [CharacterSetType.Gurmukhi]: Gurmukhi,
  [CharacterSetType.Gujarati]: Gujarati,
  [CharacterSetType.Oriya]: Oriya,
  [CharacterSetType.Tamil]: Tamil,
  [CharacterSetType.Telugu]: Telugu,
  [CharacterSetType.Kannada]: Kannada,
  [CharacterSetType.Malayalam]: Malayalam,
  [CharacterSetType.Sinhala]: Sinhala,
  [CharacterSetType.Thai]: Thai,
  [CharacterSetType.Lao]: Lao,
  [CharacterSetType.Tibetan]: Tibetan,
  [CharacterSetType.Myanmar]: Myanmar,
  [CharacterSetType.Georgian]: Georgian,
  [CharacterSetType.Hangul_Jamo]: Hangul_Jamo,
  [CharacterSetType.Ethiopic]: Ethiopic,
  [CharacterSetType.Ethiopic_Supplement]: Ethiopic_Supplement,
  [CharacterSetType.Cherokee]: Cherokee,
  [CharacterSetType.Unified_Canadian_Aboriginal_Syllabics]: Unified_Canadian_Aboriginal_Syllabics,
  [CharacterSetType.Ogham]: Ogham,
  [CharacterSetType.Runic]: Runic,
  [CharacterSetType.Tagalog]: Tagalog,
  [CharacterSetType.Hanunoo]: Hanunoo,
  [CharacterSetType.Buhid]: Buhid,
  [CharacterSetType.Tagbanwa]: Tagbanwa,
  [CharacterSetType.Khmer]: Khmer,
  [CharacterSetType.Mongolian]: Mongolian,
  [CharacterSetType.Unified_Canadian_Aboriginal_Syllabics_Extended]: Unified_Canadian_Aboriginal_Syllabics_Extended,
  [CharacterSetType.Limbu]: Limbu,
  [CharacterSetType.Tai_Le]: Tai_Le,
  [CharacterSetType.New_Tai_Lue]: New_Tai_Lue,
  [CharacterSetType.Khmer_Symbols]: Khmer_Symbols,
  [CharacterSetType.Buginese]: Buginese,
  [CharacterSetType.Tai_Tham]: Tai_Tham,
  [CharacterSetType.Combining_Diacritical_Marks_Extended]: Combining_Diacritical_Marks_Extended,
  [CharacterSetType.Balinese]: Balinese,
  [CharacterSetType.Sundanese]: Sundanese,
  [CharacterSetType.Batak]: Batak,
  [CharacterSetType.Lepcha]: Lepcha,
  [CharacterSetType.Ol_Chiki]: Ol_Chiki,
  [CharacterSetType.Cyrillic_Extended_C]: Cyrillic_Extended_C,
  [CharacterSetType.Georgian_Extended]: Georgian_Extended,
  [CharacterSetType.Sundanese_Supplement]: Sundanese_Supplement,
  [CharacterSetType.Vedic_Extensions]: Vedic_Extensions,
  [CharacterSetType.Phonetic_Extensions]: Phonetic_Extensions,
  [CharacterSetType.Phonetic_Extensions_Supplement]: Phonetic_Extensions_Supplement,
  [CharacterSetType.Combining_Diacritical_Marks_Supplement]: Combining_Diacritical_Marks_Supplement,
  [CharacterSetType.Latin_Extended_Additional]: Latin_Extended_Additional,
  [CharacterSetType.Greek_Extended]: Greek_Extended,
  [CharacterSetType.General_Punctuation]: General_Punctuation,
  [CharacterSetType.Superscripts_and_Subscripts]: Superscripts_and_Subscripts,
  [CharacterSetType.Currency_Symbols]: Currency_Symbols,
  [CharacterSetType.Combining_Diacritical_Marks_for_Symbols]: Combining_Diacritical_Marks_for_Symbols,
  [CharacterSetType.Letterlike_Symbols]: Letterlike_Symbols,
  [CharacterSetType.Number_Forms]: Number_Forms,
  [CharacterSetType.Arrows]: Arrows,
  [CharacterSetType.Mathematical_Operators]: Mathematical_Operators,
  [CharacterSetType.Miscellaneous_Technical]: Miscellaneous_Technical,
  [CharacterSetType.Control_Pictures]: Control_Pictures,
  [CharacterSetType.Optical_Character_Recognition]: Optical_Character_Recognition,
  [CharacterSetType.Enclosed_Alphanumerics]: Enclosed_Alphanumerics,
  [CharacterSetType.Box_Drawing]: Box_Drawing,
  [CharacterSetType.Block_Elements]: Block_Elements,
  [CharacterSetType.Geometric_Shapes]: Geometric_Shapes,
  [CharacterSetType.Miscellaneous_Symbols]: Miscellaneous_Symbols,
  [CharacterSetType.Dingbats]: Dingbats,
  [CharacterSetType.Miscellaneous_Mathematical_Symbols_A]: Miscellaneous_Mathematical_Symbols_A,
  [CharacterSetType.Supplemental_Arrows_A]: Supplemental_Arrows_A,
  [CharacterSetType.Braille_Patterns]: Braille_Patterns,
  [CharacterSetType.Supplemental_Arrows_B]: Supplemental_Arrows_B,
  [CharacterSetType.Miscellaneous_Mathematical_Symbols_B]: Miscellaneous_Mathematical_Symbols_B,
  [CharacterSetType.Supplemental_Mathematical_Operators]: Supplemental_Mathematical_Operators,
  [CharacterSetType.Miscellaneous_Symbols_and_Arrows]: Miscellaneous_Symbols_and_Arrows,
  [CharacterSetType.Glagolitic]: Glagolitic,
  [CharacterSetType.Latin_Extended_C]: Latin_Extended_C,
  [CharacterSetType.Coptic]: Coptic,
  [CharacterSetType.Georgian_Supplement]: Georgian_Supplement,
  [CharacterSetType.Tifinagh]: Tifinagh,
  [CharacterSetType.Ethiopic_Extended]: Ethiopic_Extended,
  [CharacterSetType.Cyrillic_Extended_A]: Cyrillic_Extended_A,
  [CharacterSetType.Supplemental_Punctuation]: Supplemental_Punctuation,
  [CharacterSetType.CJK_Radicals_Supplement]: CJK_Radicals_Supplement,
  [CharacterSetType.Kangxi_Radicals]: Kangxi_Radicals,
  [CharacterSetType.Ideographic_Description_Characters]: Ideographic_Description_Characters,
  [CharacterSetType.CJK_Symbols_and_Punctuation]: CJK_Symbols_and_Punctuation,
  [CharacterSetType.Hiragana]: Hiragana,
  [CharacterSetType.Katakana]: Katakana,
  [CharacterSetType.Bopomofo]: Bopomofo,
  [CharacterSetType.Hangul_Compatibility_Jamo]: Hangul_Compatibility_Jamo,
  [CharacterSetType.Kanbun]: Kanbun,
  [CharacterSetType.Bopomofo_Extended]: Bopomofo_Extended,
  [CharacterSetType.CJK_Strokes]: CJK_Strokes,
  [CharacterSetType.Katakana_Phonetic_Extensions]: Katakana_Phonetic_Extensions,
  [CharacterSetType.Enclosed_CJK_Letters_and_Months]: Enclosed_CJK_Letters_and_Months,
  [CharacterSetType.CJK_Compatibility]: CJK_Compatibility,
  [CharacterSetType.CJK_Unified_Ideographs_Extension_A]: CJK_Unified_Ideographs_Extension_A,
  [CharacterSetType.Yijing_Hexagram_Symbols]: Yijing_Hexagram_Symbols,
  [CharacterSetType.CJK_Unified_Ideographs]: CJK_Unified_Ideographs,
  [CharacterSetType.Yi_Syllables]: Yi_Syllables,
  [CharacterSetType.Yi_Radicals]: Yi_Radicals,
  [CharacterSetType.Lisu]: Lisu,
  [CharacterSetType.Vai]: Vai,
  [CharacterSetType.Cyrillic_Extended_B]: Cyrillic_Extended_B,
  [CharacterSetType.Bamum]: Bamum,
  [CharacterSetType.Modifier_Tone_Letters]: Modifier_Tone_Letters,
  [CharacterSetType.Latin_Extended_D]: Latin_Extended_D,
  [CharacterSetType.Syloti_Nagri]: Syloti_Nagri,
  [CharacterSetType.Common_Indic_Number_Forms]: Common_Indic_Number_Forms,
  [CharacterSetType.Phags_pa]: Phags_pa,
  [CharacterSetType.Saurashtra]: Saurashtra,
  [CharacterSetType.Devanagari_Extended]: Devanagari_Extended,
  [CharacterSetType.Kayah_Li]: Kayah_Li,
  [CharacterSetType.Rejang]: Rejang,
  [CharacterSetType.Hangul_Jamo_Extended_A]: Hangul_Jamo_Extended_A,
  [CharacterSetType.Javanese]: Javanese,
  [CharacterSetType.Myanmar_Extended_B]: Myanmar_Extended_B,
  [CharacterSetType.Cham]: Cham,
  [CharacterSetType.Myanmar_Extended_A]: Myanmar_Extended_A,
  [CharacterSetType.Tai_Viet]: Tai_Viet,
  [CharacterSetType.Meetei_Mayek_Extensions]: Meetei_Mayek_Extensions,
  [CharacterSetType.Ethiopic_Extended_A]: Ethiopic_Extended_A,
  [CharacterSetType.Latin_Extended_E]: Latin_Extended_E,
  [CharacterSetType.Cherokee_Supplement]: Cherokee_Supplement,
  [CharacterSetType.Meetei_Mayek]: Meetei_Mayek,
  [CharacterSetType.Hangul_Syllables]: Hangul_Syllables,
  [CharacterSetType.Hangul_Jamo_Extended_B]: Hangul_Jamo_Extended_B,
  [CharacterSetType.High_Surrogates]: High_Surrogates,
  [CharacterSetType.High_Private_Use_Surrogates]: High_Private_Use_Surrogates,
  [CharacterSetType.Low_Surrogates]: Low_Surrogates,
  [CharacterSetType.Private_Use_Area]: Private_Use_Area,
  [CharacterSetType.CJK_Compatibility_Ideographs]: CJK_Compatibility_Ideographs,
  [CharacterSetType.Alphabetic_Presentation_Forms]: Alphabetic_Presentation_Forms,
  [CharacterSetType.Arabic_Presentation_Forms_A]: Arabic_Presentation_Forms_A,
  [CharacterSetType.Variation_Selectors]: Variation_Selectors,
  [CharacterSetType.Vertical_Forms]: Vertical_Forms,
  [CharacterSetType.Combining_Half_Marks]: Combining_Half_Marks,
  [CharacterSetType.CJK_Compatibility_Forms]: CJK_Compatibility_Forms,
  [CharacterSetType.Small_Form_Variants]: Small_Form_Variants,
  [CharacterSetType.Arabic_Presentation_Forms_B]: Arabic_Presentation_Forms_B,
  [CharacterSetType.Halfwidth_and_Fullwidth_Forms]: Halfwidth_and_Fullwidth_Forms,
  [CharacterSetType.Specials]: Specials,
  [CharacterSetType.Linear_B_Syllabary]: Linear_B_Syllabary,
  [CharacterSetType.Linear_B_Ideograms]: Linear_B_Ideograms,
  [CharacterSetType.Aegean_Numbers]: Aegean_Numbers,
  [CharacterSetType.Ancient_Greek_Numbers]: Ancient_Greek_Numbers,
  [CharacterSetType.Ancient_Symbols]: Ancient_Symbols,
  [CharacterSetType.Phaistos_Disc]: Phaistos_Disc,
  [CharacterSetType.Lycian]: Lycian,
  [CharacterSetType.Carian]: Carian,
  [CharacterSetType.Coptic_Epact_Numbers]: Coptic_Epact_Numbers,
  [CharacterSetType.Old_Italic]: Old_Italic,
  [CharacterSetType.Gothic]: Gothic,
  [CharacterSetType.Old_Permic]: Old_Permic,
  [CharacterSetType.Ugaritic]: Ugaritic,
  [CharacterSetType.Old_Persian]: Old_Persian,
  [CharacterSetType.Deseret]: Deseret,
  [CharacterSetType.Shavian]: Shavian,
  [CharacterSetType.Osmanya]: Osmanya,
  [CharacterSetType.Osage]: Osage,
  [CharacterSetType.Elbasan]: Elbasan,
  [CharacterSetType.Caucasian_Albanian]: Caucasian_Albanian,
  [CharacterSetType.Vithkuqi]: Vithkuqi,
  [CharacterSetType.Todhri]: Todhri,
  [CharacterSetType.Linear_A]: Linear_A,
  [CharacterSetType.Latin_Extended_F]: Latin_Extended_F,
  [CharacterSetType.Cypriot_Syllabary]: Cypriot_Syllabary,
  [CharacterSetType.Imperial_Aramaic]: Imperial_Aramaic,
  [CharacterSetType.Palmyrene]: Palmyrene,
  [CharacterSetType.Nabataean]: Nabataean,
  [CharacterSetType.Hatran]: Hatran,
  [CharacterSetType.Phoenician]: Phoenician,
  [CharacterSetType.Lydian]: Lydian,
  [CharacterSetType.Meroitic_Hieroglyphs]: Meroitic_Hieroglyphs,
  [CharacterSetType.Meroitic_Cursive]: Meroitic_Cursive,
  [CharacterSetType.Kharoshthi]: Kharoshthi,
  [CharacterSetType.Old_South_Arabian]: Old_South_Arabian,
  [CharacterSetType.Old_North_Arabian]: Old_North_Arabian,
  [CharacterSetType.Manichaean]: Manichaean,
  [CharacterSetType.Avestan]: Avestan,
  [CharacterSetType.Inscriptional_Parthian]: Inscriptional_Parthian,
  [CharacterSetType.Inscriptional_Pahlavi]: Inscriptional_Pahlavi,
  [CharacterSetType.Psalter_Pahlavi]: Psalter_Pahlavi,
  [CharacterSetType.Old_Turkic]: Old_Turkic,
  [CharacterSetType.Old_Hungarian]: Old_Hungarian,
  [CharacterSetType.Hanifi_Rohingya]: Hanifi_Rohingya,
  [CharacterSetType.Garay]: Garay,
  [CharacterSetType.Rumi_Numeral_Symbols]: Rumi_Numeral_Symbols,
  [CharacterSetType.Yezidi]: Yezidi,
  [CharacterSetType.Arabic_Extended_C]: Arabic_Extended_C,
  [CharacterSetType.Old_Sogdian]: Old_Sogdian,
  [CharacterSetType.Sogdian]: Sogdian,
  [CharacterSetType.Old_Uyghur]: Old_Uyghur,
  [CharacterSetType.Chorasmian]: Chorasmian,
  [CharacterSetType.Elymaic]: Elymaic,
  [CharacterSetType.Brahmi]: Brahmi,
  [CharacterSetType.Kaithi]: Kaithi,
  [CharacterSetType.Sora_Sompeng]: Sora_Sompeng,
  [CharacterSetType.Chakma]: Chakma,
  [CharacterSetType.Mahajani]: Mahajani,
  [CharacterSetType.Sharada]: Sharada,
  [CharacterSetType.Sinhala_Archaic_Numbers]: Sinhala_Archaic_Numbers,
  [CharacterSetType.Khojki]: Khojki,
  [CharacterSetType.Multani]: Multani,
  [CharacterSetType.Khudawadi]: Khudawadi,
  [CharacterSetType.Grantha]: Grantha,
  [CharacterSetType.Tulu_Tigalari]: Tulu_Tigalari,
  [CharacterSetType.Newa]: Newa,
  [CharacterSetType.Tirhuta]: Tirhuta,
  [CharacterSetType.Siddham]: Siddham,
  [CharacterSetType.Modi]: Modi,
  [CharacterSetType.Mongolian_Supplement]: Mongolian_Supplement,
  [CharacterSetType.Takri]: Takri,
  [CharacterSetType.Myanmar_Extended_C]: Myanmar_Extended_C,
  [CharacterSetType.Ahom]: Ahom,
  [CharacterSetType.Dogra]: Dogra,
  [CharacterSetType.Warang_Citi]: Warang_Citi,
  [CharacterSetType.Dives_Akuru]: Dives_Akuru,
  [CharacterSetType.Nandinagari]: Nandinagari,
  [CharacterSetType.Zanabazar_Square]: Zanabazar_Square,
  [CharacterSetType.Soyombo]: Soyombo,
  [CharacterSetType.Unified_Canadian_Aboriginal_Syllabics_Extended_A]: Unified_Canadian_Aboriginal_Syllabics_Extended_A,
  [CharacterSetType.Pau_Cin_Hau]: Pau_Cin_Hau,
  [CharacterSetType.Devanagari_Extended_A]: Devanagari_Extended_A,
  [CharacterSetType.Sunuwar]: Sunuwar,
  [CharacterSetType.Bhaiksuki]: Bhaiksuki,
  [CharacterSetType.Marchen]: Marchen,
  [CharacterSetType.Masaram_Gondi]: Masaram_Gondi,
  [CharacterSetType.Gunjala_Gondi]: Gunjala_Gondi,
  [CharacterSetType.Makasar]: Makasar,
  [CharacterSetType.Kawi]: Kawi,
  [CharacterSetType.Lisu_Supplement]: Lisu_Supplement,
  [CharacterSetType.Tamil_Supplement]: Tamil_Supplement,
  [CharacterSetType.Cuneiform]: Cuneiform,
  [CharacterSetType.Cuneiform_Numbers_and_Punctuation]: Cuneiform_Numbers_and_Punctuation,
  [CharacterSetType.Early_Dynastic_Cuneiform]: Early_Dynastic_Cuneiform,
  [CharacterSetType.Cypro_Minoan]: Cypro_Minoan,
  [CharacterSetType.Egyptian_Hieroglyphs]: Egyptian_Hieroglyphs,
  [CharacterSetType.Egyptian_Hieroglyph_Format_Controls]: Egyptian_Hieroglyph_Format_Controls,
  [CharacterSetType.Egyptian_Hieroglyphs_Extended_A]: Egyptian_Hieroglyphs_Extended_A,
  [CharacterSetType.Anatolian_Hieroglyphs]: Anatolian_Hieroglyphs,
  [CharacterSetType.Gurung_Khema]: Gurung_Khema,
  [CharacterSetType.Bamum_Supplement]: Bamum_Supplement,
  [CharacterSetType.Mro]: Mro,
  [CharacterSetType.Tangsa]: Tangsa,
  [CharacterSetType.Bassa_Vah]: Bassa_Vah,
  [CharacterSetType.Pahawh_Hmong]: Pahawh_Hmong,
  [CharacterSetType.Kirat_Rai]: Kirat_Rai,
  [CharacterSetType.Medefaidrin]: Medefaidrin,
  [CharacterSetType.Miao]: Miao,
  [CharacterSetType.Ideographic_Symbols_and_Punctuation]: Ideographic_Symbols_and_Punctuation,
  [CharacterSetType.Tangut]: Tangut,
  [CharacterSetType.Tangut_Components]: Tangut_Components,
  [CharacterSetType.Khitan_Small_Script]: Khitan_Small_Script,
  [CharacterSetType.Tangut_Supplement]: Tangut_Supplement,
  [CharacterSetType.Kana_Extended_B]: Kana_Extended_B,
  [CharacterSetType.Kana_Supplement]: Kana_Supplement,
  [CharacterSetType.Kana_Extended_A]: Kana_Extended_A,
  [CharacterSetType.Small_Kana_Extension]: Small_Kana_Extension,
  [CharacterSetType.Nushu]: Nushu,
  [CharacterSetType.Duployan]: Duployan,
  [CharacterSetType.Shorthand_Format_Controls]: Shorthand_Format_Controls,
  [CharacterSetType.Symbols_for_Legacy_Computing_Supplement]: Symbols_for_Legacy_Computing_Supplement,
  [CharacterSetType.Znamenny_Musical_Notation]: Znamenny_Musical_Notation,
  [CharacterSetType.Byzantine_Musical_Symbols]: Byzantine_Musical_Symbols,
  [CharacterSetType.Musical_Symbols]: Musical_Symbols,
  [CharacterSetType.Ancient_Greek_Musical_Notation]: Ancient_Greek_Musical_Notation,
  [CharacterSetType.Kaktovik_Numerals]: Kaktovik_Numerals,
  [CharacterSetType.Mayan_Numerals]: Mayan_Numerals,
  [CharacterSetType.Tai_Xuan_Jing_Symbols]: Tai_Xuan_Jing_Symbols,
  [CharacterSetType.Counting_Rod_Numerals]: Counting_Rod_Numerals,
  [CharacterSetType.Mathematical_Alphanumeric_Symbols]: Mathematical_Alphanumeric_Symbols,
  [CharacterSetType.Sutton_SignWriting]: Sutton_SignWriting,
  [CharacterSetType.Latin_Extended_G]: Latin_Extended_G,
  [CharacterSetType.Glagolitic_Supplement]: Glagolitic_Supplement,
  [CharacterSetType.Cyrillic_Extended_D]: Cyrillic_Extended_D,
  [CharacterSetType.Nyiakeng_Puachue_Hmong]: Nyiakeng_Puachue_Hmong,
  [CharacterSetType.Toto]: Toto,
  [CharacterSetType.Wancho]: Wancho,
  [CharacterSetType.Nag_Mundari]: Nag_Mundari,
  [CharacterSetType.Ol_Onal]: Ol_Onal,
  [CharacterSetType.Ethiopic_Extended_B]: Ethiopic_Extended_B,
  [CharacterSetType.Mende_Kikakui]: Mende_Kikakui,
  [CharacterSetType.Adlam]: Adlam,
  [CharacterSetType.Indic_Siyaq_Numbers]: Indic_Siyaq_Numbers,
  [CharacterSetType.Ottoman_Siyaq_Numbers]: Ottoman_Siyaq_Numbers,
  [CharacterSetType.Arabic_Mathematical_Alphabetic_Symbols]: Arabic_Mathematical_Alphabetic_Symbols,
  [CharacterSetType.Mahjong_Tiles]: Mahjong_Tiles,
  [CharacterSetType.Domino_Tiles]: Domino_Tiles,
  [CharacterSetType.Playing_Cards]: Playing_Cards,
  [CharacterSetType.Enclosed_Alphanumeric_Supplement]: Enclosed_Alphanumeric_Supplement,
  [CharacterSetType.Enclosed_Ideographic_Supplement]: Enclosed_Ideographic_Supplement,
  [CharacterSetType.Miscellaneous_Symbols_and_Pictographs]: Miscellaneous_Symbols_and_Pictographs,
  [CharacterSetType.Emoticons]: Emoticons,
  [CharacterSetType.Ornamental_Dingbats]: Ornamental_Dingbats,
  [CharacterSetType.Transport_and_Map_Symbols]: Transport_and_Map_Symbols,
  [CharacterSetType.Alchemical_Symbols]: Alchemical_Symbols,
  [CharacterSetType.Geometric_Shapes_Extended]: Geometric_Shapes_Extended,
  [CharacterSetType.Supplemental_Arrows_C]: Supplemental_Arrows_C,
  [CharacterSetType.Supplemental_Symbols_and_Pictographs]: Supplemental_Symbols_and_Pictographs,
  [CharacterSetType.Chess_Symbols]: Chess_Symbols,
  [CharacterSetType.Symbols_and_Pictographs_Extended_A]: Symbols_and_Pictographs_Extended_A,
  [CharacterSetType.Symbols_for_Legacy_Computing]: Symbols_for_Legacy_Computing,
  [CharacterSetType.CJK_Unified_Ideographs_Extension_B]: CJK_Unified_Ideographs_Extension_B,
  [CharacterSetType.CJK_Unified_Ideographs_Extension_C]: CJK_Unified_Ideographs_Extension_C,
  [CharacterSetType.CJK_Unified_Ideographs_Extension_D]: CJK_Unified_Ideographs_Extension_D,
  [CharacterSetType.CJK_Unified_Ideographs_Extension_E]: CJK_Unified_Ideographs_Extension_E,
  [CharacterSetType.CJK_Unified_Ideographs_Extension_F]: CJK_Unified_Ideographs_Extension_F,
  [CharacterSetType.CJK_Unified_Ideographs_Extension_I]: CJK_Unified_Ideographs_Extension_I,
  [CharacterSetType.CJK_Compatibility_Ideographs_Supplement]: CJK_Compatibility_Ideographs_Supplement,
  [CharacterSetType.CJK_Unified_Ideographs_Extension_G]: CJK_Unified_Ideographs_Extension_G,
  [CharacterSetType.CJK_Unified_Ideographs_Extension_H]: CJK_Unified_Ideographs_Extension_H,
  [CharacterSetType.Tags]: Tags,
  [CharacterSetType.Variation_Selectors_Supplement]: Variation_Selectors_Supplement,
  [CharacterSetType.Supplementary_Private_Use_Area_A]: Supplementary_Private_Use_Area_A,
  [CharacterSetType.Supplementary_Private_Use_Area_B]: Supplementary_Private_Use_Area_B,
};
