import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('/teste', "routes/teste.tsx"),
    route('/auth', "routes/auth.tsx"),
    route('/produtos', "routes/produtos.tsx"),
    route('/create/produto', "routes/create-product.tsx")



] satisfies RouteConfig;
