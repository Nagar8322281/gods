import { Children, useState } from "react";
import "./css/sandbox.css";

function Displayer({ children }) {
  const [index, setIndex] = useState();
  return (
    <div>
      {Children.map(children, (child, i) =>
        i == index - 1 ? <>{child}</> : ""
      )}
      <input
        type="number"
        min={1}
        max={Children.count(children)}
        onChange={(ev) => setIndex(ev.target.value)}
      />
    </div>
  );
}

function Window({ title, children }) {
  const [visible, setVisible] = useState(true);
  // if (!visible) {
  //     return;
  // }
  return (
    <div className={`window ${!visible ? "close" : ""}`}>
      <header className="sandbox-header">
        <span>{title}</span>
        <button className="sandbox-btn" onClick={() => setVisible(false)}>
          ❌
        </button>
      </header>
      <main>
        <h1>Window</h1>
        <Displayer>{children}</Displayer>
      </main>
    </div>
  );
}

function Sandbox() {
  return (
    <div>
      <p>Sand Box</p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate iusto
      nostrum quis a neque, delectus aliquid voluptatum! Consectetur deleniti
      deserunt animi vero facilis est iusto voluptas, dolorem illum molestiae.
      Voluptas laboriosam beatae officia asperiores libero laudantium nemo
      itaque incidunt quis expedita. Doloremque amet, dolorum illo obcaecati
      fugit minima quaerat expedita odit, temporibus fugiat perspiciatis, nihil
      molestiae enim dolores excepturi quisquam pariatur quis necessitatibus
      sint. Porro cumque deserunt, magnam blanditiis libero tempore quibusdam,
      soluta ipsum doloremque, minima aliquam temporibus accusantium ab rerum at
      dolores mollitia vel eaque dignissimos excepturi praesentium iste itaque
      veritatis. Ut molestias enim repudiandae aperiam? Repellendus, dolores
      perferendis rem reprehenderit obcaecati, vel asperiores enim atque nisi
      debitis, libero consectetur velit consequatur illo ut aperiam dolor quis
      placeat a veritatis? Beatae totam sunt iste veritatis tempora odio
      corporis cum reprehenderit sint velit, nostrum vero quos laborum numquam
      natus nesciunt. Maxime, ut! Quas iure, obcaecati consequatur distinctio
      hic possimus praesentium laboriosam molestias assumenda fuga? Debitis
      rerum cupiditate praesentium vitae aperiam ad voluptatibus. A, cumque sint
      nostrum beatae et exercitationem quis inventore, doloremque eligendi,
      debitis assumenda modi doloribus ab quod? Quisquam nemo illum, iste autem
      deserunt eveniet ratione repudiandae, odit adipisci laudantium culpa unde
      quis qui quaerat commodi voluptatum dicta doloremque nobis illo minus
      doloribus quia inventore assumenda fuga? Ratione praesentium sapiente
      laboriosam error iste ea a sed voluptates suscipit ex nobis ipsam
      obcaecati voluptate, repellat iusto, reiciendis, commodi voluptatum nam ab
      illo similique perspiciatis odit inventore ducimus! Earum facere tenetur
      temporibus ullam harum dolores, voluptatibus quisquam repudiandae, minus
      eos suscipit exercitationem est magnam qui commodi soluta unde error.
      Expedita iure deleniti dolor nisi distinctio, quasi unde similique magni
      iste laudantium eius velit itaque, eos laborum labore blanditiis officia
      accusamus repellendus veritatis architecto. Enim harum quas recusandae
      deserunt accusamus officiis quasi obcaecati rem saepe. Eaque iusto
      similique itaque maxime consectetur neque sit eius, nisi voluptatem,
      quidem repudiandae fugit magnam nemo incidunt at quos repellat, deleniti
      nobis a qui cum. Exercitationem labore porro possimus quo nihil, ab odit
      sed enim mollitia cumque omnis, vel modi laborum. Ut tempora quis adipisci
      suscipit exercitationem deserunt, fugit animi tenetur obcaecati laborum
      explicabo hic nulla? Nemo ipsam debitis, dolore tempore illum
      reprehenderit libero, dignissimos iste quibusdam odio veritatis non
      doloremque nulla soluta id placeat praesentium similique optio excepturi
      at dolorum vitae. Distinctio saepe explicabo commodi dignissimos
      voluptatibus impedit quam eius necessitatibus, est possimus dicta, omnis
      in delectus esse repudiandae at nulla placeat rerum? Reiciendis sapiente
      qui maxime est nemo quas perferendis fugiat laboriosam quaerat? Nisi
      commodi sit tenetur aliquid cupiditate odit a. Dolorem quae voluptates
      sequi, ullam aliquid, recusandae sem quisquam dolores praesentium reiciendis
      temporibus maxime qui quas blanditiis sed totam recusandae, aliquid nam
      deleniti officiis! Sit delectus tenetur magnam minima magni omnis suscipit
      corporis, ratione sint natus, libero quod itaque necessitatibus! Nemo,
      cumque ad! Quam, et dolorum recusandae harum optio mollitia! Ipsum ea
      exercitationem sit molestiae voluptatibus iure excepturi, explicabo aut
      provident unde alias saepe corrupti nihil quam laboriosam. Sapiente
      laborum mollitia officiis molestias sed sunt, exercitationem dolorum ex
      id, aliquam natus animi eligendi, voluptatem cum eius. Quod doloremque
      dolorem incidunt aut perferendis cum optio placeat fuga voluptas, iure
      officia. Similique numquam exercitationem ad, recusandae pariatur
      accusantium facere voluptatem dignissimos quae tenetur sequi sunt sint,
      quisquam rem. Molestias labore impedit optio tenetur, animi esse ab quos!
      Minus soluta in voluptatibus tenetur ipsa. Ipsum itaque explicabo autem
      esse quidem modi similique, eaque culpa reprehenderit quibusdam ea
      accusamus, fuga odio minus in minima veritatis, nobis excepturi eligendi
      doloribus laboriosam impedit? Odit deserunt quisquam eligendi voluptatibus
      consequuntur quas aut, reprehenderit odio iste non magni blanditiis
      officia delectus. In error cum, suscipit accusamus vero et deleniti odio
      eos ullam voluptatem magni quo reprehenderit debitis esse velit delectus
      voluptatibus quam, culpa itaque asperiores aut! Mollitia deserunt
      molestias, similique qui aliquam doloremque porro. Dolor quisquam iure
      voluptas consequatur porro cum repellendus, iste delectus! Fugit, nobis
      eius rem quasi, quod eveniet explicabo iste ut recusandae ipsum ullam
      dolorum quas, inventore molestias ducimus illum. Excepturi unde nam
      architecto optio doloremque, sit rerum aspernatur, suscipit impedit et
      nostrum, ipsam nisi commodi consequatur quisquam maiores dolores sequi
      voluptas at? Consequatur impedit dolorem quia in excepturi facere odio
      harum vero nihil, maiores corrupti praesentium, dolorum iste. Vel,
      adipisci? Enim natus suscipit eveniet minima nihil ea quidem quod?
      Consequatur hic adipisci ipsum voluptatem eveniet porro dolore debitis
      molestias distinctio ex dolorem doloremque quas at veniam ad, iste natus
      tempore, molestiae ducimus labore expedita minus, reiciendis placeat! Iure
      eius accusantium assumenda tempore dolore natus delectus possimus quis
      nemo eaque optio laboriosam sed sapiente ullam rerum nesciunt itaque minus
      corrupti, libero inventore tenetur qui unde magni debitis. Dolorum nam
      optio reprehenderit deleniti magni dolorem aut doloribus iusto dolores
      distinctio perferendis error blanditiis deserunt excepturi vel sunt
      dignissimos, sed rem minima modi molestiae dicta necessitatibus qui. Culpa
      est possimus at aut doloribus deserunt minima reiciendis, voluptas qui! A
      officiis mollitia nesciunt qui facilis veniam eveniet, totam ab!
      <PopupButton title="text">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="sandbox-cell">
            {i}
          </div>
        ))}
      </PopupButton>
    </div>
  );
}

export default Sandbox;
