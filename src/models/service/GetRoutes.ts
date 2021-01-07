type Link = {
  name: string;
  description: string;
  params: any;
  requestExample: string;
};

type Route = {
  group?: string;
  link: Link[];
};

type Routes = {
  ts: number;
  data: Route;
  id: number;
};

type GetAllRoutes = {
  data?: Routes[];
  msg?: string;
};

export default GetAllRoutes;
