import {
  component$,
  useContext,
  useStylesScoped$,
  useTask$,
} from "@builder.io/qwik";
import { storeContext } from "~/root";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  const store = useContext(storeContext);
  useTask$(({ track }) => {
    track(() => store.headerTitle);
  });
  return (
    <div>
      <header class="header">
        <nav class="header__nav">
          <h1>🏆 Zenika Awards</h1>
          <ul class="header__nav__navbar">
            <li class="header__nav__item">
              <a href="/">Accueil</a>
            </li>
            <li class="header__nav__item">
              <a href="/add">Ajouter une citation</a>
            </li>
          </ul>
        </nav>
        <div class="header__title">
          <h1>{store.headerTitle}</h1>
        </div>
      </header>
      <svg
        class="header__svg"
        viewBox="0 0 1440 120"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0,72L12,72C24,72,48,72,72,72C96,72,120,72,144,78C168,84,192,96,216,98C240,100,264,92,288,92C312,92,336,100,360,90C384,80,408,52,432,38C456,24,480,24,504,20C528,16,552,8,576,18C600,28,624,56,648,66C672,76,696,68,720,56C744,44,768,28,792,28C816,28,840,44,864,58C888,72,912,84,936,80C960,76,984,56,1008,50C1032,44,1056,52,1080,46C1104,40,1128,20,1152,26C1176,32,1200,64,1224,80C1248,96,1272,96,1296,82C1320,68,1344,40,1368,40C1392,40,1416,68,1440,76C1464,84,1488,72,1512,60C1536,48,1560,36,1584,34C1608,32,1632,40,1656,46C1680,52,1704,56,1716,58L1728,60L1728,120L1716,120C1704,120,1680,120,1656,120C1632,120,1608,120,1584,120C1560,120,1536,120,1512,120C1488,120,1464,120,1440,120C1416,120,1392,120,1368,120C1344,120,1320,120,1296,120C1272,120,1248,120,1224,120C1200,120,1176,120,1152,120C1128,120,1104,120,1080,120C1056,120,1032,120,1008,120C984,120,960,120,936,120C912,120,888,120,864,120C840,120,816,120,792,120C768,120,744,120,720,120C696,120,672,120,648,120C624,120,600,120,576,120C552,120,528,120,504,120C480,120,456,120,432,120C408,120,384,120,360,120C336,120,312,120,288,120C264,120,240,120,216,120C192,120,168,120,144,120C120,120,96,120,72,120C48,120,24,120,12,120L0,120Z"></path>
      </svg>
    </div>
  );
});
