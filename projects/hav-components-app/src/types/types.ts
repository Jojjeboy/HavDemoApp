interface ComponentProperty {
  propertyName: string;
  propertyType: string;
  default?: any;
  description: string;
}

interface ComponentApi {
  selector: string;
  module: {
    name: string;
    importPath: string;
  };
  inputs: ComponentProperty[];
  outputs: ComponentProperty[];
  methods: ComponentProperty[];
}

export { ComponentApi, ComponentProperty };
