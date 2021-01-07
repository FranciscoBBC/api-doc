import faunadb from 'faunadb';
import GetRoutes from '@models/service/GetRoutes';

const faunaClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });
const q = faunadb.query;

export const createRoute = async obj => console.log(obj);

export const getAllRoutes = async (): Promise<GetRoutes> => {
  const data: any = await faunaClient.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('routes'))),
      q.Lambda('ref', q.Get(q.Var('ref')))
    )
  );

  const routes = data.data.map(route => {
    const ret = route;
    ret.id = route.ref.id;
    delete ret.ref;
    delete ret.ts;
    return ret;
  });
  return routes;
};

export const getRouteById = async id => console.log(id);

export const searchRoute = async name => console.log(name);
