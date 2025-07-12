import { useEffect } from 'react';
import { useViewOrEdit } from '../lib/useViewOrEdit';
import ModeSwitch from './modeSwitch';

const CONTENT = `# Suscipiunt de aratro monstris deae spiritus fervens

## Nec nec tenet aequoreo mox referat eratque

Lorem markdownum meis. Sub subit iacet poterit.

- Dubie pectoraque tempusque audaci
- Ne mihi lumina vestigia mille
- Oramus senserit
- Nitentem et quis pavent geniti ensis quod

![cat](https://ynoa-uploader.ynoacamino.site/uploads/1750128245_a.webp)

Edita anne non declivis fatemur offensus somno volubilibus inpositaque hic
*carmen* mariti reminiscitur erat conticuere. Somnus adsumus, suae tum, dum et
exiguis, quod hasta Gradive magnis loci annos. Bos conexa aderat: iubet fuit;
examina loquendo famem; est [pavet sine](http://illa-insidior.net/duorumlata)
fit rebus paruerant et mora, et. Postque aut ramos tellus lavere crudelis,
guttura cervum primus docet: nec parat validisne senectae.

## Mente spiris monstrique petiti amamus et dedit

Finierat disiecit, vivacia, gurgite apes exigis dixit imis levarit vivit.
Geruntur emensas fretum, at haerent repellite verus, fraterque. Attulit et
disque, stat nova, suarum, latrantibus blandis praeposuisse dissidet vos tenui!
Per quem pectora languescuntque moverat mente. *Inrita quae* medio pugman
iugulaberis haec cura, minoribus ubi hoc: quoquam cecidere tempora, vulnus
ministrae inpune vocibus.

![cat](https://ynoa-uploader.ynoacamino.site/uploads/1750128245_a.webp)

Aere cutis terrae et heros ullum retusa; pars fusus caelestia moram. Ut caret
tenet umida solebat aperite **floribus** et iubet coacervatos. Manat medium,
capiebant pharetram alii [distantes causas](http://referre-subito.io/cornibus)
locutus pietas committere qualemve ista, fluvialis. Si tua coniuge gestet
ingentique e pennisque quaeque, nec Io rector ausus usae est.

\`\`\`
half(arrayRomVeronica(irc_user, 3), alphaDawUser.uddi(web));
var icfServerPad = saas(rss_flood(-5, drmPup), 5 + intellectual -
        solidCross);
var schema_margin_ldap = 1;
var formatVideoLayout = wiki;
\`\`\`

![cat](https://ynoa-uploader.ynoacamino.site/uploads/1750128245_a.webp)

Factis erit ambiguis aut aestu poscitis, lino tandem naides quod fraterno!
Facundus **caede**, odore soror quisquam bellum.`;

export default function AddPost() {
  const { content, setContent, setViewOrEdit, viewOrEdit } = useViewOrEdit();

  useEffect(() => {
    if (!content) {
      setContent(CONTENT);
    }
  }, []);

  return (
    <ModeSwitch
      viewOrEdit={viewOrEdit}
      setViewOrEdit={setViewOrEdit}
      content={content}
      setContent={setContent}
    />
  );
}
