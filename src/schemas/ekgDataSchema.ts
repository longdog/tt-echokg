import * as z from "zod";

export const ekgDataSchema = z.object({
  // Паспортная часть
  patient_first_name: z.string().describe("Имя пациента"),
  patient_last_name: z.string().describe("Фамилия пациента"),
  patient_middle_name: z.string().describe("Отчество пациента"),
  patient_sex: z.enum(["М", "Ж"]).describe("Пол пациента"),
  patient_dob: z
    .string()
    .regex(/^\d{2}\.\d{2}\.\d{4}$/)
    .describe("Дата рождения"),
  ambulatory_card: z.string().describe("Номер амбулаторной карты"),
  protocol_num: z.string().describe("Номер протокола исследования"),
  exam_date: z
    .string()
    .regex(/^\d{2}\.\d{2}\.\d{4}$/)
    .describe("Дата проведения"),
  executed_by: z.string().describe("Выполнено по направлению"),
  exam_type: z.string().describe("Вид обращения"),
  exam_place: z.string().describe("Место проведения"),
  referral_diag: z.string().describe("Направительный диагноз"),
  us_machine: z.string().describe("Модель ультразвукового аппарата"),
  image_quality: z
    .enum(["Оптимальное", "Субоптимальное", "Неоптимальное"])
    .describe("Качество изображения"),

  // Результаты исследования
  bsa: z.number().describe("ППТ (Площадь поверхности тела)"),
  height: z.number().describe("Рост"),
  weight: z.number().describe("Вес"),
  bmi: z.number().describe("ИМТ (Индекс массы тела)"),
  hr: z.number().describe("ЧСС"),
  rhythm: z
    .enum(["Синусовый", "фибрилляция предсердий", "ЭКС", "Другое"])
    .describe("Ритм"),
  local_systolic: z
    .enum(["1", "2", "3", "4", "5"])
    .describe("Визуализация локальной сократимости ЛЖ"),

  // Левый желудочек (ЛЖ)
  ivsd: z.number().describe("ТМЖП (Толщина межжелуд. перегородки)"),
  lpwv: z.number().describe("ТЗС ЛЖ (Толщина задней стенки)"),
  lvedd: z.number().describe("КДР ЛЖ (Конечно-диастолич. размер)"),
  lvesd: z.number().describe("КСР ЛЖ (Конечно-систолич. размер)"),
  lvedv: z.number().describe("КДО ЛЖ (Конечно-диастолич. объем)"),
  lvedv_i: z.number().describe("КДО ЛЖ индекс"),
  lvesv: z.number().describe("КСО ЛЖ"),
  lvesv_i: z.number().describe("КСО ЛЖ индекс"),
  ef_simpson: z.number().describe("ФВ ЛЖ Симпсон"),
  ots_lv: z.number().describe("ОТС ЛЖ"),
  lv_mass_i: z.number().describe("ИММ ЛЖ (Индекс массы миокарда)"),
  uolj: z.number().describe("УО ЛЖ(метод дисков)"),

  // Диастолическая функция ЛЖ / Расчетное давление наполнения ЛЖ
  pik_e_mk: z.number().describe("Пик Е МК"),
  e_a_mk: z.number().describe("ЕА/МК"),
  e_e: z.number().describe("E/e'"),

  // Левое предсердие
  la_diam: z.number().describe("Диаметр ЛП"),
  la_vol: z.number().describe("Объем ЛП"),
  la_vol_i: z.number().describe("Объем ЛП индекс"),

  // Аорта
  ao_root: z.number().describe("Ао СВ"),
  asc_ao: z.number().describe("Восх Ао"),
  duga_ao: z.number().describe("Дуга Ао"),

  // Правый желудочек
  rvd: z.number().describe("ПЖ (ПЗР)"),
  rv_base: z.number().describe("Баз ПЖ"),
  rv_wall: z.number().describe("Толщина стенки ПЖ"),
  tapse: z.number().describe("TAPSE"),

  // Правое предсердие
  ra_vol: z.number().describe("Объём ПП"),
  ra_vol_i: z.number().describe("Объём ПП индекс"),
  ra_area: z.number().describe("Площадь ПП"),

  // Нижняя полая вена
  ivc_exp: z.number().describe("НПВ выдох"),
  ivc_insp: z.number().describe("НПВ вдох"),
  ivc_coll: z.number().describe("Спадение НПВ"),

  // Расчетное систолическое давление в легочной артерии
  max_grad_tr: z.number().describe("Макс Градиент ТР"),
  sdla: z.number().describe("СДЛА"),

  // Описание клапанов

  // Дегенеративные изменения, Дилатация кольца, Кальциноз, Пролапс, Систолическая рестрикция, Отрыв, Протез
  mitral_valve_changes: z
    .object({
      degeneration: z.boolean().describe("Дегенеративные изменения"),
      dilation: z.boolean().describe("Дилатация кольца"),
      calcification: z.boolean().describe("Кальциноз"),
      prolapse: z.boolean().describe("Пролапс"),
      systolic_restriction: z.boolean().describe("Систолическая рестрикция"),
      tearing: z.boolean().describe("Отрыв"),
      prosthesis: z.boolean().describe("Протез"),
    })
    .describe("Митральный клапан - изменения"),

  mit_valve_peak_velocity: z.number().describe("Пик. скорость"),
  mit_valve_stenosis: z.enum(["1", "0"]).describe("Митральный стеноз"),
  mit_valve_regurgitation: z
    .enum(["0", "1"])
    .describe("Митральная регургитация"),

  aortic_valve_changes: z
    .object({
      degeneration: z.boolean().describe("Дегенеративные изменения"),
      dilation: z.boolean().describe("Дилатация кольца"),
      calcification: z.boolean().describe("Кальциноз"),
      prolapse: z.boolean().describe("Пролапс"),
      abnormal_flaps: z.boolean().describe("Аномалии количества створок"),
      prosthesis: z.boolean().describe("Протез"),
      tavi: z.boolean().describe("TAVI"),
    })
    .describe("Аортальный клапан - изменения"),
  aor_valve_peak_velocity: z.number().describe("Пик. скорость"),
  aor_valve_stenosis: z.enum(["1", "0"]).describe("Аортальный стеноз"),
  aor_valve_regurgitation: z
    .enum(["0", "1"])
    .describe("Аортальная регургитация"),

  tricuspid_valve_changes: z
    .object({
      degeneration: z.boolean().describe("Дегенеративные изменения"),
      dilation: z.boolean().describe("Дилатация кольца"),
      calcification: z.boolean().describe("Кальциноз"),
      prolapse: z.boolean().describe("Пролапс"),
      prosthesis: z.boolean().describe("Протез"),
    })
    .describe("Трикуспидальный клапан - изменения"),
  trik_valve_peak_velocity: z.number().describe("Пик. скорость"),
  trik_valve_stenosis: z.enum(["1", "0"]).describe("Трикуспидальный стеноз"),
  trik_valve_regurgitation: z
    .enum(["0", "1"])
    .describe("Трикуспидальная регургитация"),

  pulmonary_valve_changes: z
    .object({
      degeneration: z.boolean().describe("Дегенеративные изменения"),
      dilation: z.boolean().describe("Дилатация кольца"),
      calcification: z.boolean().describe("Кальциноз"),
      prosthesis: z.boolean().describe("Протез"),
    })
    .describe("Пульмональный клапан - изменения"),
  pul_valve_peak_velocity: z.number().describe("Пик. скорость"),
  pul_valve_stenosis: z.enum(["1", "0"]).describe("Пульмональный стеноз"),
  pul_valve_regurgitation: z
    .enum(["0", "1"])
    .describe("Пульмональная регургитация"),

  // Текстовое описание и заключение
  text_description: z.string().describe("Описание"),
  conclusion: z.string().describe("Заключение"),
});

export const ekgDataPartialSchema = ekgDataSchema.partial();
export const ekgDataJSONSchema = z.toJSONSchema(ekgDataSchema);
export const ekgDataPartialJSONSchema = z.toJSONSchema(ekgDataPartialSchema);
export type EkgDataType = z.infer<typeof ekgDataSchema>;
export type EkgDataPartialType = z.infer<typeof ekgDataPartialSchema>;
