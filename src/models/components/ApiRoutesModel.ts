interface route {
  group?: string;
  link: string[];
}

interface ApiRoutesModel {
  routes: route[];
}

export default ApiRoutesModel;
