import React, { useEffect, useRef } from "react";
import "./Container.css";

export default function Container() {
  const newsLetterRef = useRef();

  useEffect(() => {
    document.title = "7.Utiliser-un-observateur";

    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      if (entries[0].isIntersecting) {
        newsLetterRef.current.classList.add("active");
        observer.unobserve(newsLetterRef.current);
      }
    });

    observer.observe(newsLetterRef.current);

    return () => {
      observer.disconnect(); // Unobserve the element when the component unmounts
    };
  }, []); // Empty dependency array to run only once

  return (
    <div className="container">
      <h1>Utiliser un observateur</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem unde
        omnis quidem culpa dolores, sunt odit eos blanditiis animi
        exercitationem, dolore tenetur natus optio. Excepturi adipisci
        praesentium inventore earum ea illum vero, rem maxime quod voluptates
        temporibus autem aspernatur ducimus porro? Earum ipsa esse deleniti rem
        pariatur facere maxime, laborum minima fugiat vel veritatis voluptate
        nisi rerum quas, similique ab voluptatem tempore cupiditate reiciendis
        ad laboriosam magnam quibusdam? Distinctio impedit fugit officia
        accusamus provident et tenetur error deserunt obcaecati minus odio earum
        quam iure, sunt id! Blanditiis sequi ex adipisci? Mollitia beatae minima
        ex, quam ducimus ad nam ratione a placeat recusandae doloremque
        accusantium veritatis, in explicabo earum corporis dolor tempora eaque!
        Ab ex culpa nostrum illum nobis dolore, vero veritatis autem,
        laboriosam, blanditiis sint officiis. Totam non recusandae nihil hic
        reprehenderit, inventore vitae accusamus cupiditate esse fugit maiores
        voluptas repellendus nam sapiente! Molestias assumenda provident quos
        tempore ratione aperiam nam velit libero animi modi. Qui aliquam vel
        deserunt. Nostrum quaerat, laudantium assumenda, pariatur tenetur ipsa
        sequi veniam in delectus similique corrupti fugiat vero inventore odio
        quidem numquam provident cupiditate illum, neque unde alias odit?
        Placeat delectus dolorem quod neque recusandae cumque odio, dicta vel
        nihil voluptatibus libero voluptatem culpa fuga obcaecati aspernatur
        saepe molestias numquam possimus! Culpa sequi, quia quos dolores facilis
        ullam? Iste, accusamus quos mollitia illum velit assumenda eligendi
        ipsum pariatur saepe, provident alias repellendus. Quis, quibusdam iure.
        Asperiores accusantium numquam possimus commodi veritatis voluptates ad
        consectetur omnis recusandae sed? Voluptate, consequatur consectetur
        suscipit numquam natus magnam quam autem fuga enim non quis. Quia
        eveniet, suscipit eos quasi rem deleniti blanditiis corporis veritatis
        perferendis perspiciatis odio explicabo doloribus tenetur! Corrupti
        consequuntur debitis tempora, aut consectetur iure a alias itaque sed
        voluptas saepe quidem non placeat nisi quas vel. Natus ab omnis aperiam
        quo eum amet voluptatum laboriosam. Distinctio iste, suscipit,
        voluptatum aperiam repudiandae reiciendis corporis non ipsam
        voluptatibus nobis, atque nulla! Repellendus, quia quis? Iure, sequi
        error eos officiis quibusdam vel excepturi eaque. Placeat error eos
        perspiciatis necessitatibus voluptatem explicabo nemo, voluptas nihil
        dolorem. Laboriosam quibusdam veniam numquam deserunt iste odit ipsa
        voluptate eius! Facere non dignissimos accusamus atque minus laboriosam,
        molestias blanditiis maiores rerum ullam placeat, aliquam animi
        distinctio, nemo deleniti! Enim aut voluptatem, blanditiis culpa at,
        commodi accusantium iste possimus doloribus ut harum? Repellat ex
        consequatur expedita. Iure, quis expedita consectetur architecto quo
        dolorum praesentium? Corporis corrupti, facilis doloribus non quam ad
        repellat mollitia culpa earum voluptatum accusantium commodi, hic
        aspernatur odio, quisquam ut vitae dicta rem dolorem quo velit expedita?
        Repudiandae eum eos, optio, esse suscipit vitae magnam iste fuga enim
        dolore non ut consequatur accusamus aut impedit voluptate dolorem
        veniam! Voluptatum animi aperiam ipsum perferendis quam, delectus nisi
        quas asperiores ipsa fugiat quia laudantium quis mollitia harum aut
        incidunt in, eaque dolores quo? Eaque sapiente voluptas similique cumque
        odio harum autem consequatur tempora laboriosam ea pariatur laudantium
        recusandae alias placeat eveniet esse tempore, veritatis quae ipsa
        ducimus nesciunt atque in error fuga! Officia similique nulla molestias
        quod ipsum id rem praesentium, quisquam optio animi amet corrupti
        aperiam, iste facilis tempora, a dolorem quo odit excepturi sit natus
        mollitia architecto error. Eaque nobis deleniti quos debitis ipsa iure
        quod, sed nisi, ipsum labore ex unde minus earum aliquam ut
        exercitationem fuga quo fugiat non voluptatem? Eum quos obcaecati, sunt
        illo unde odit facilis illum fugit cum! Quo magnam tempore impedit iste
        sapiente sed eaque incidunt asperiores dolor, esse omnis placeat aliquid
        autem dolores aut! Dicta molestiae error aspernatur dolore? Doloremque,
        quo eum quisquam recusandae aut quam in omnis! Repellendus quia cum
        officia totam! Quasi rem excepturi est nisi maiores adipisci alias!
        Nobis facilis ducimus molestiae labore praesentium sequi omnis, vitae
        dolorem obcaecati voluptas quaerat corporis. Fugiat ut alias harum,
        excepturi dolorem molestias fugit sed veritatis, ullam illo rerum!
        Reprehenderit vero illo dignissimos consequuntur expedita hic harum
        doloremque, aperiam maiores amet iure, tenetur sapiente voluptates
        perspiciatis qui adipisci. Pariatur, sapiente ipsum facere ipsam maxime
        sed quibusdam nisi possimus voluptatum, quisquam nulla nobis ut est
        praesentium veritatis ullam voluptate doloribus tempore hic! Vel,
        voluptatem itaque. Et ea, deleniti nostrum velit, odio pariatur
        doloribus dolorum quasi cum atque, delectus ut. Est quasi, dignissimos
        totam asperiores temporibus veritatis ullam, eligendi veniam molestiae
        impedit dolores pariatur quae esse quibusdam excepturi cumque nam harum
        ipsa placeat assumenda iure inventore praesentium quidem odio! Itaque
        asperiores blanditiis excepturi mollitia, debitis assumenda atque id
        nemo perspiciatis quos repellendus culpa corporis amet labore dicta aut
        a quasi inventore, iure modi quisquam. Quaerat pariatur natus soluta
        iure, impedit placeat deserunt sint voluptatum esse quasi similique
        sequi iusto totam corporis earum quisquam incidunt vel accusamus,
        perferendis tempore quod amet sunt officiis. Fugit ab ad natus quis.
        Magnam cum, nesciunt deleniti animi recusandae sequi rerum praesentium
        eligendi expedita. Esse odio ad tempora, provident accusantium
        temporibus explicabo quo nihil earum laboriosam ipsam totam tenetur non
        quisquam, deleniti beatae reprehenderit architecto, atque ab ullam
        voluptatem! Quas dolor qui, dolores accusamus amet maiores velit aliquam
        modi excepturi optio reprehenderit doloribus ducimus voluptatem
        dignissimos dolorum. Quae laudantium explicabo illo sunt neque sapiente,
        magnam nobis pariatur similique, repellat harum quidem. Eum magni illo
        perspiciatis? Tempore culpa laboriosam nemo provident facilis sapiente
        voluptas magni soluta repellendus. Ipsam delectus nisi magni quidem,
        ducimus repellat iste aspernatur quae debitis consectetur nam quam
        reiciendis distinctio odio deserunt soluta doloribus quas expedita
        asperiores excepturi est iusto corporis facilis. Quam repudiandae at qui
        ratione laudantium vel animi, saepe pariatur ipsum tenetur deleniti quis
        enim quos ullam iste magni voluptates doloribus! Ducimus placeat iste
        eos quisquam accusantium laborum natus aliquam asperiores impedit
        voluptate. Vel iusto voluptatibus non eius, temporibus tenetur quis
        dolorem, illum, sunt laboriosam debitis! Hic quos voluptas cupiditate
        velit dolorum mollitia reprehenderit, temporibus accusamus porro. Odio
        mollitia quasi vel labore ea laboriosam, dolorem eaque provident error
        assumenda? Dicta consequuntur consequatur quia officiis ea praesentium
        reprehenderit officia sint quis modi aliquid, dolorem accusamus quidem
        nisi possimus aspernatur repellat! Obcaecati excepturi dolorum iure,
        nemo iusto aliquam veritatis suscipit esse error inventore, cum quidem
        velit autem doloremque quo aliquid voluptatibus vel, ad optio ut tenetur
        mollitia? Perferendis at veritatis molestias eius error ea repudiandae
        voluptatem maiores voluptatibus quae cum dolor deserunt recusandae
        commodi corrupti eligendi, magnam ab dolores! At obcaecati eum,
        repellendus minima tempore eaque fuga facere, enim distinctio corporis
        deleniti quis ipsum dicta maiores eveniet voluptates ducimus beatae.
        Reiciendis, doloribus quae. Cupiditate omnis esse eos, necessitatibus
        minus corrupti eum! Eum repellendus, quam eaque veritatis minima
        mollitia asperiores? Id totam voluptatibus corporis nesciunt saepe nisi
        dolore possimus itaque ullam, harum dolorem, ratione qui, magnam
        deleniti eveniet aliquam facere? Quaerat explicabo dolorem sapiente
        omnis consequuntur sequi accusamus, nemo nihil quisquam quas eius libero
        sit cumque vitae quam debitis beatae ad est consectetur quo nobis
        suscipit tempora. Odit iusto dolore itaque dignissimos. Officiis,
        accusamus adipisci deserunt, earum dolore perferendis voluptas repellat
        architecto beatae repellendus nesciunt iure cumque autem nam optio,
        alias quas fugit error modi molestias aspernatur! Dolor labore voluptas
        inventore facilis consequuntur cupiditate tempore esse, quibusdam maxime
        aliquam deserunt soluta totam. Sed porro dolorum rem cupiditate
        necessitatibus, laboriosam, molestias possimus commodi quos ea unde
        blanditiis obcaecati culpa. Voluptatem consequatur repellat possimus
        aspernatur debitis neque, nam culpa expedita repudiandae ducimus,
        corporis asperiores accusantium distinctio pariatur. Officiis fuga
        consectetur pariatur, alias ab praesentium ex voluptatum minus non
        deleniti sint laborum a nam nesciunt animi obcaecati eligendi commodi
        provident in libero illum reprehenderit dolor, voluptates sapiente. Iure
        ducimus quia quaerat consequatur nisi, ipsum consequuntur. Tempore,
        eaque sunt, dolores inventore sit nesciunt veritatis placeat sed
        reprehenderit dolore ad alias. Neque eveniet quo pariatur officia
        voluptatum impedit explicabo optio error a ratione repellendus harum,
        ipsa, laudantium assumenda quaerat. Repellendus autem corporis sequi cum
        velit modi maxime earum voluptatibus neque, harum exercitationem illum!
        Obcaecati, natus non eaque fuga consequuntur ipsum repudiandae excepturi
        cupiditate, dolorem enim, totam iusto! Atque commodi, minima iste culpa
        laborum molestiae deserunt eveniet quia modi maiores sint incidunt quo
        nesciunt quidem ad sunt nisi architecto, obcaecati voluptatibus!
        Assumenda, aut. Sapiente fugiat mollitia, ea deleniti, obcaecati quasi
        quam cumque voluptates commodi modi officia praesentium, quos aperiam
        illum minima eaque voluptate dolores repellendus pariatur tenetur? Saepe
        maxime pariatur minima laboriosam inventore dicta consequatur alias
        molestiae quos quia ipsa voluptatem optio fuga accusantium repellendus,
        atque repudiandae, nam iusto. Laboriosam, fugiat quod. Ratione vel unde
        quasi molestiae quas temporibus facilis aliquid tenetur ipsam iste,
        possimus tempore dicta, nesciunt dolorum voluptatibus, modi ullam.
        Itaque magni repellat ut officiis earum sint labore inventore, dolorem
        minima? Aliquid error, placeat ex quasi modi minima est ea harum numquam
        aperiam eius quia! Eaque voluptatem consectetur quis! Sit est
        accusantium harum hic exercitationem vero distinctio obcaecati
        aspernatur aliquid! Totam unde temporibus enim quo hic accusantium
        aliquam qui alias quos nam atque aperiam earum voluptatibus, possimus
        autem, dolores magni rerum ut. Id accusantium tempore cupiditate
        repellendus earum nisi atque repudiandae doloremque ea dolores. Tempore
        accusantium doloribus natus laudantium perferendis, distinctio aliquam
        hic, quidem atque deleniti voluptate velit delectus recusandae! Libero
        delectus at ex aut? Facilis dolorum expedita eos ipsa quasi voluptate
        harum corporis porro, aut maxime fugiat? Adipisci at praesentium
        excepturi maiores minus unde magnam eius sapiente? Perferendis maxime
        quibusdam nihil beatae exercitationem ipsa ut.
      </p>
      <div className="newsLetter" ref={newsLetterRef}>
        <h2>Observerd element</h2>
      </div>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit amet ratione facilis est hic ducimus distinctio. Delectus nemo, laudantium possimus quae est quia a, odio repellendus nam mollitia et! Provident ipsam recusandae ex accusantium ut nostrum excepturi necessitatibus quas nisi hic eos voluptatibus quos, voluptate consequatur, dolores a consectetur! Iure explicabo neque tenetur harum, nam tempore nemo aperiam, adipisci, consequuntur ex debitis excepturi. Explicabo reiciendis necessitatibus eos facere odit quae delectus similique veritatis tenetur veniam modi, voluptates, odio nulla, molestias eligendi dolores in aliquid fuga quidem at? Voluptate placeat consequatur quibusdam? A culpa nesciunt eligendi maxime, nemo qui eveniet eos? Non mollitia fugiat rerum commodi quas error placeat aperiam dicta maxime itaque distinctio, consequuntur soluta corrupti sint omnis quis esse in tenetur! Nesciunt magni voluptas ducimus praesentium eius labore, temporibus itaque facilis ipsa natus voluptates architecto tempora unde deserunt eum commodi explicabo ad omnis, animi quae obcaecati modi quibusdam! Amet hic dolorem tenetur consequuntur, rem magni fugiat, veritatis, at possimus quia ipsam distinctio quis. Ullam delectus nostrum corrupti id assumenda dolor perferendis laboriosam, obcaecati maiores excepturi! Ducimus nisi suscipit amet dolorum, beatae porro totam laboriosam. Beatae soluta nesciunt fuga harum aperiam non! Vitae nisi id odit recusandae repellat temporibus exercitationem laborum omnis nihil debitis libero sed ipsum, rem, aspernatur at dignissimos odio? Numquam quibusdam voluptatum libero debitis, id corporis facilis suscipit temporibus natus earum dolores nisi ex officia reiciendis, aliquid sequi inventore repellat ad! Quos nobis et maxime obcaecati similique veniam, architecto porro dolor dolores quas consectetur ullam laudantium nam explicabo sint ab laboriosam necessitatibus quasi perspiciatis dignissimos? Quidem provident, fugiat nesciunt velit voluptatibus vitae. Vel, perferendis enim. Dolore perspiciatis iste, dignissimos sit dolores culpa repudiandae numquam doloribus, molestiae, illo quos? Consequuntur quibusdam omnis, corporis, iste animi optio excepturi veniam nemo cupiditate fugit error rerum debitis vel necessitatibus pariatur esse nostrum est dolore sed cumque doloremque impedit perspiciatis. Saepe natus, corporis tenetur doloremque odio recusandae voluptatum dignissimos beatae nulla itaque asperiores consequatur ipsa, provident quasi quaerat, sapiente possimus doloribus consectetur soluta aut est iste. Quidem, nemo cum expedita numquam, voluptate autem obcaecati consequuntur reprehenderit, odio aut quam modi vero fuga ea quae? Dignissimos tempora aliquam dolore inventore! Voluptate id delectus exercitationem repellendus recusandae rem ipsa nostrum eaque? Sint sit repellat distinctio ad commodi, at placeat reiciendis accusamus optio magni veritatis exercitationem excepturi officiis, ipsam iure amet? Natus harum aliquam molestias officiis autem laudantium dignissimos similique reprehenderit modi repellendus assumenda dolorum sed et non animi a ipsum praesentium laborum, ullam quo impedit inventore fugit. Ratione saepe sit aspernatur rem illo accusamus cum harum culpa labore sapiente aut inventore facere maiores ut nisi commodi quibusdam, perspiciatis totam officia velit minus possimus ad pariatur numquam. Ipsum voluptates beatae molestiae nostrum temporibus ipsam voluptatem ullam, quia repudiandae eum enim sunt odio perferendis rem, neque quaerat alias tempore unde minus aut. Laborum delectus reprehenderit corporis quibusdam ex facilis maxime culpa hic, iure eaque? Ipsa ut animi ipsum perspiciatis magnam earum minus illo, rem atque saepe pariatur incidunt sint voluptate hic officiis! Perspiciatis consectetur, impedit, assumenda porro debitis ratione eos fugiat cupiditate, quae architecto a tenetur. Molestias, in non? Laudantium quia, nihil adipisci debitis quam consequuntur expedita est impedit quis veniam mollitia quidem repellat sunt eligendi enim porro natus, quisquam, maxime consequatur? Sit, magni. Maxime quod quidem velit cupiditate distinctio ducimus odit dolore tenetur delectus expedita esse illo modi sapiente ut optio officiis sint voluptates eius nulla, quas nam. Et, asperiores ad maiores vel illum dicta beatae ex architecto, illo soluta magnam rerum mollitia quae incidunt veniam repellat sint nemo aperiam esse ab! Hic assumenda ducimus atque voluptas, non voluptates illum tempore eum minus corrupti, laboriosam doloremque quod. Dignissimos sed ipsam quos ex accusamus repellendus. Corporis voluptas vitae labore, natus odit eos accusantium exercitationem quos reprehenderit iusto. Harum, reiciendis? Repellat quibusdam ut sit quasi blanditiis aut impedit ipsum cumque adipisci, amet placeat architecto, incidunt maxime modi quod dolore. Delectus, quasi? Voluptatibus animi sapiente ducimus inventore quo ullam suscipit totam enim? Consequatur inventore eligendi dolorum soluta officiis cum consequuntur. Culpa, magnam eius. Alias libero minima id adipisci, tenetur repellat tempora! At dignissimos totam, voluptatibus provident molestias perspiciatis quibusdam aliquam officiis hic dolorem deleniti unde similique consectetur nisi facilis ipsam eius aut quo, fugit illum a. Exercitationem facere omnis accusamus possimus similique veniam dolore harum rerum saepe expedita libero optio quos distinctio architecto at eligendi suscipit nemo odit labore, aliquid quod! Dolorem qui, quasi maiores laboriosam minus enim velit ad ut veniam vitae libero unde tempore est adipisci inventore repellendus, earum esse nemo! Id, accusantium! Quaerat enim velit illum odio quibusdam soluta accusantium placeat eum nihil. Odio natus eaque tempore eum nihil error porro hic nemo laborum dolorum consectetur officia autem provident sint quibusdam architecto asperiores eius eveniet adipisci deserunt, facere incidunt a! At omnis quasi quam est, distinctio eaque quos. Et sunt, quaerat recusandae doloremque cumque commodi tempore. Quidem tempora, nisi dolores eum exercitationem excepturi quia similique. Deleniti, fuga autem! Voluptas ut eos sint repellat non inventore accusamus sapiente, quam nesciunt hic quod. Nobis id praesentium, odit soluta minus molestiae maxime nemo hic! Quasi similique voluptatibus est repellat asperiores nemo explicabo alias omnis veniam nihil cumque voluptatem quaerat eos, quia vel eum cum maiores deleniti, adipisci ullam sunt quos aperiam nesciunt. Magni aspernatur error voluptatem expedita pariatur autem incidunt minima saepe, unde dolores fuga hic sint officia iusto corrupti quasi, rem sed alias deleniti quo quae. Quia, animi? Tempore consectetur illum exercitationem dolorem necessitatibus ut nihil distinctio, ipsa impedit aliquam culpa cum deserunt! Voluptates inventore omnis earum exercitationem ea itaque libero est, voluptatibus rerum! Quod magni nihil in natus ratione. Molestiae saepe asperiores sit in temporibus numquam dolores doloribus ipsa qui dolorem facere, placeat quidem consequuntur natus beatae totam magnam esse fugit nobis? Et voluptatum harum recusandae soluta ea est, id inventore quas maiores numquam ex hic deserunt doloremque odit earum odio illum rerum ipsa placeat accusamus! Explicabo quibusdam hic facilis laudantium consequatur quae quidem numquam, in nemo quaerat, modi amet expedita molestiae provident esse soluta consequuntur facere a minus, atque quisquam eum. Ut cupiditate excepturi suscipit minus rerum sequi iusto esse quae adipisci molestias accusamus voluptatem, inventore aspernatur eos temporibus ab quaerat. Ea facere quia consequatur, nemo qui veritatis ab, sequi quam maxime nam eligendi odit praesentium, fugit corrupti optio ipsam voluptas. Similique praesentium officia facilis aperiam quis quisquam, ipsum magni iure earum, mollitia sequi rerum, natus ut cumque quod iusto alias qui esse? Inventore animi porro eius mollitia ipsa distinctio consequuntur eum amet fuga totam numquam at deserunt similique, temporibus, est quae iusto cum quibusdam neque hic ipsum adipisci odio. Enim, voluptatem rem, eius ex ducimus fugiat mollitia ullam quia quibusdam reiciendis alias minima, eligendi laudantium possimus ipsam odio porro adipisci? Ullam vel provident eius ratione architecto nesciunt unde, vero, accusamus molestiae saepe hic sequi rem autem quaerat, eveniet id laboriosam facere corrupti quod est cum doloremque dolorem? Placeat voluptas quia possimus delectus itaque? Dolore quo vel ipsam velit quisquam deleniti eveniet dolor consectetur ratione est tenetur delectus expedita reiciendis, veritatis, eos quas sed eligendi numquam architecto rerum mollitia ipsum natus voluptates! Ratione amet, laudantium ab ipsam quis repellendus voluptatem voluptatum deleniti dolorum aspernatur. Ad perspiciatis nostrum ullam quae quibusdam iusto reprehenderit aliquid quod cum! Cumque, rem! Ipsam iure iste natus, dignissimos maiores sapiente tenetur obcaecati sequi! Iste, ratione. In accusamus earum debitis, nobis dolore voluptas repellat nihil delectus molestiae laborum cum ex ea autem quasi nostrum eius repudiandae, nisi quod cumque deleniti quam? Sint provident sed voluptates a doloribus ab. Rerum inventore laudantium voluptatem, deleniti ex dolorem. Aliquam, ab optio ullam ex qui laudantium minus quam fugit repellat tenetur suscipit? Obcaecati voluptas temporibus rem ea deserunt nam commodi ullam distinctio voluptatibus vel, et veniam eveniet itaque unde quos vero accusamus voluptatum repudiandae excepturi sed illum modi suscipit dolorem! Quisquam exercitationem error a, blanditiis quaerat veritatis excepturi quae in facere, possimus officia et, saepe rerum architecto labore nemo ullam voluptates debitis neque optio nisi at sed voluptatibus quidem! Voluptatem beatae at, distinctio est nihil voluptate quasi amet veniam laudantium iure maiores debitis fuga ea, unde, rem nulla error quam. Dignissimos reprehenderit minus voluptatibus neque repellendus beatae velit nihil fuga accusantium exercitationem? Assumenda voluptatem sequi, quia dicta quasi sit distinctio at error, ad aperiam recusandae ut temporibus incidunt quibusdam! Atque itaque nesciunt esse eum dolorem error nisi cumque! Aliquid obcaecati modi magni expedita ab rerum voluptatibus nulla velit quam neque dignissimos eum, ipsa culpa beatae. Esse facere aperiam reiciendis rerum mollitia error quibusdam harum, quasi corrupti itaque exercitationem saepe! Nobis ducimus inventore, libero natus incidunt possimus. Culpa voluptas aut omnis minima laborum vero ut, dolorum eum veniam dolore dolor voluptatibus laboriosam iusto, temporibus praesentium facilis neque recusandae quod laudantium repellendus. Consequatur quasi pariatur assumenda iste adipisci debitis repellat eum expedita illo quia nemo placeat ipsum, ad rem eius, temporibus quibusdam? Ex consequuntur eveniet itaque? Reprehenderit accusamus debitis illo tenetur veniam, aspernatur aut assumenda perspiciatis nesciunt itaque quibusdam culpa consequuntur enim exercitationem amet quia? Veniam, maxime velit? Numquam expedita labore impedit eaque architecto temporibus beatae cum, suscipit sunt error. Dolorem aut deleniti in voluptatum amet velit quia?</p>
    </div>
  );
}
