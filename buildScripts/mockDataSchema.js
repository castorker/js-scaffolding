export const schema = {
  "type": "object",
  "properties": {
    "quibbles": {
      "type": "array",
      "minItems": 3,
      "maxItems": 7,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "category": {
            "description": "Category of the quibble",
            "type": "string"
          },
          "text": {
            "description": "Text of the quibble",
            "type": "string"
          },
        },
        "required": ["id", "category", "text"]
      }
    }
  },
  "required": ["quibbles"]
};
