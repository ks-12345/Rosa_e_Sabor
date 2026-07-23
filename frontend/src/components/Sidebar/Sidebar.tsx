import { Link, useLocation } from "react-router-dom";
import {
  House,
  BoxSeam,
  Basket,
  Cart,
  FileBarGraph,
  Gear,
  ClipboardCheck,
} from "react-bootstrap-icons";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const { pathname } = useLocation();

  const menu = [
    { nome: "Dashboard", rota: "/dashboard", icon: <House size={20} /> },
    { nome: "Produção", rota: "/producao", icon: <Basket size={20} /> },
    { nome: "Estoque", rota: "/estoque", icon: <BoxSeam size={20} /> },
    { nome: "Compras", rota: "/compras", icon: <Cart size={20} /> },
    { nome: "Cardápio", rota: "/cardapio", icon: <ClipboardCheck size={20} /> },
    { nome: "Relatórios", rota: "/relatorios", icon: <FileBarGraph size={20} /> },
    { nome: "Configurações", rota: "/configuracoes", icon: <Gear size={20} /> },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        🌹 <span>Rosa & Sabor</span>
      </div>

      <nav>
        {menu.map((item) => (
          <Link
            key={item.rota}
            to={item.rota}
            className={`${styles.link} ${
              pathname === item.rota ? styles.active : ""
            }`}
          >
            {item.icon}
            <span>{item.nome}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}