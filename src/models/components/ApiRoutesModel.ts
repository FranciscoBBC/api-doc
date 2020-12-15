interface Link {
  name: string;
  description: string;
  params: any;
  requestExample: string;
}

interface Route {
  group?: string;
  link: Link[];
}

interface ApiRoutesModel {
  routes?: Route[];
}

export default ApiRoutesModel;
