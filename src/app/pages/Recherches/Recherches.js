import React from 'react';
import './Recherches.scss';


const Recherches = () => {
  return (
    <main>
      <section className='page-intro'>
        <article>
          <h1>"Le premier ennemi de la connaissance n'est pas l'ignorance, c'est l'illusion de la connaissance."</h1>
          <h2>- Stephen Hawking</h2>
        </article>
      </section>
      <section>
        <article>
          <div>
            <h1>Les trous noirs</h1>
            <h4>
              Stephen Hawking a proposé que ces objets célestes ne soient pas totalement « noirs » et émettent une radiation, 
              connue sous le nom de « radiation de Hawking ». Cette découverte suggère que les trous noirs peuvent finalement 
              s’évaporer et disparaître, remettant en question l'idée que rien ne peut s'échapper de leur attraction gravitationnelle.
            </h4>
          </div>
          <div>
            <img src="" alt="image de trou noir selon Stephen Hawking" />
          </div>
        </article>
        <article>
          <div>
            <h1>La cosmologie et le Big Bang</h1>
            <h4>
              Hawking a contribué à la théorie du Big Bang, développant des modèles mathématiques qui décrivent l'univers à ses débuts. 
              Il a travaillé sur la manière dont l'univers a évolué depuis cette singularité initiale, 
              aidant à établir un lien entre la relativité générale et la mécanique quantique.
            </h4>
          </div>
          <div>
            <img src="" alt="image de Stephen Hawking devant un tableau comportant des calculs" />
          </div>
        </article>
      </section>
    </main>
  );
}

export default Recherches;