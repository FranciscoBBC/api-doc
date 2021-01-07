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

interface Fauna {
  id: string;
  data: Route;
}
interface ApiRoutesModel {
  routes?: Fauna[];
  handleChange: (val: string) => void;
}

export default ApiRoutesModel;
