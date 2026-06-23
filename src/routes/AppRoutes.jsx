import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import Vitrine from "../components/produto/Vitrine";
import ProdutoDetalhe from "../pages/ProdutoDetalhe";
import Login from "../pages/Login";
import MinhaConta from "../pages/MinhaConta";
import RotaProtegida from "./RotaProtegida";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Vitrine />} />
          <Route path="/produto/:id" element={<ProdutoDetalhe />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/minha-conta"
            element={
              <RotaProtegida>
                <MinhaConta />
              </RotaProtegida>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}