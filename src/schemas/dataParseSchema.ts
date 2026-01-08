import * as z from "zod";

export const dataParseSchema = z.object({
  extracted_items: z.array(
    z
      .object({
        label: z.string().describe("Название параметра"),
        value: z.string().describe("Значение параметра"),
        unit: z.string().optional().describe("Единица измерения"),
        confidence: z
          .number()
          .min(0)
          .max(10)
          .describe(
            "Уверенность в однозначности извлечения параметра (0-10) 0 - минимальная, 10 - максимальная"
          ),
        context: z
          .string()
          .describe(
            "Контекст извлечения, фрагмент текста, где был найден параметр"
          ),
      })
      .describe("Извлеченные параметры и их значения")
  ),
});

export type DataParseType = z.infer<typeof dataParseSchema>;

export const dataParseJSONSchema = z.toJSONSchema(dataParseSchema);

export const dataParseExample = {
  extracted_items: [
    {
      label: "Левожелудочковый индекс массы",
      value: "100",
      unit: "г/м²",
      confidence: 10,
      context: "Левожелудочковый индекс массы 100 г/м²",
    },
  ],
};
