# TT-EchoKG Schemas

Zod schemas for EKG (echocardiography) data.

This library provides a set of [Zod](https://zod.dev/) schemas for validating EKG data. It's useful for ensuring that your EKG data is in the correct format and that all required fields are present.

## Installation

```bash
npm install tt-echokg-schemas
```

## Usage

```typescript
import { ekgDataSchema, EkgDataType } from "tt-echokg-schemas";

const ekgData: EkgDataType = {
  // ... your EKG data
};

try {
  ekgDataSchema.parse(ekgData);
  console.log("EKG data is valid!");
} catch (error) {
  console.error("EKG data is invalid:", error);
}
```

## Available Schemas

- `ekgDataSchema`: The main schema for EKG data.
- `ekgDataPartialSchema`: A partial version of the `ekgDataSchema` where all fields are optional.
- `ekgDataJSONSchema`: The JSON schema for the `ekgDataSchema`.
- `ekgDataPartialJSONSchema`: The JSON schema for the `ekgDataPartialSchema`.
- `dataParseSchema`: A schema for parsing data.
- `dataParseJSONSchema`: The JSON schema for the `dataParseSchema`.

## Data Types

- `EkgDataType`: The TypeScript type for the `ekgDataSchema`.
- `EkgDataPartialType`: The TypeScript type for the `ekgDataPartialSchema`.
- `DataParseType`: The TypeScript type for the `dataParseSchema`.