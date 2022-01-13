const wordEl = document.querySelector('#word');
const wrongLetterEl = document.querySelector('#wrong-letters');
const playAgainBtn = document.querySelector('#play-button');
const popup = document.querySelector('#popup-container');
const notification = document.querySelector('#notification-container');
const finalMessage = document.querySelector('#final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ["alcade","muni","lamsters","kickboxers","raucousnesses","convalescent","unaccountably","lezzes","counterstained","purgers","scabious","ritualistic","cyanogenesis","trumps","melphalans","dynasty","prepense","shrilly","mesogleal","packness","cappings","amphitheaters","chechako","breastfed","knar","addled","avianized","distemperatures","strangler","auntly","creatine","volunteerisms","chiliast","focally","awesomeness","sacrilegiously","malleolus","scuncheons","plutonian","triathlons","concretizing","disposers","tween","reciprocates","advocate","repeating","irradiator","boroughs","tilters","supervened","transparence","perpents","hugely","ribless","cement","onlookers","rampageousness","enterokinase","guaranties","cheque","antiscorbutics","psychogenesis","ropeways","detoxicates","hijacker","incompliant","presages","retropacks","tafferel","delicacy","cynic","angels","miss","umbo","conveyorizing","bibliotist","overenthusiasm","blossom","glioma","fayalites","daiquiri","paters","bertha","mopingly","wainscots","journaled","viands","posses","causeries","lamenesses","lasting","hydrogens","bacterized","wagered","tahsildar","busted","cycles","interparty","whiteheads","ainsells","teacarts","quick","courantes","fishes","saggared","botanizers","exciple","tubulure","floccose","rebilled","outbuying","frogmarch","carnifies","interdigitated","volcanized","bullfighter","iliac","hopelessness","phantast","gradualness","overpromoting","recallers","unnails","latecomers","mafficking","kippers","altruism","lacteally","prerequire","fictionalized","butylenes","motorbuses","raddling","swear","leopardesses","beworry","barbarity","marshaled","mandamus","sorrowful","reexpose","baffies","subwayed","catecholamine","entities","outcharmed","replicons","ocean","brachycephaly","bloatware","repros","attorn","motific","ungenial","fruitwood","mi","fulgent","verticalness","lipid","paranoidal","champions","ambassadorships","courter","antisymmetric","astigmatisms","relevance","sandpiles","stupidly","abstractly","hypercapnias","antilogical","sensibilia","readership","washcloth","reveling","anetholes","underpinned","leukopenia","halids","khakis","adipocytes","mirexes","drawplate","hirers","maids","allergist","ancestoring","mistreated","teratogenic","ghettos","ganymedes","haen","typical","adolescently","kolkhozniks","goodlier","tract","tablas","swill","bricklayers","outreckoning","becrawl","snaglike","stuivers","neocortical","coassists","yeanling","promotivenesses","effusive","whittle","disbars","outbalances","bowering","feedyards","receivers","pestilent","theirself","aport","deponing","metaphrases","prolusion","tripping","scenically","ruana","stilt","middlebrow","corvids","nimbleness","fermented","momentums","lionlike","protostar","melanoblasts","khadis","pryingly","dolce","prewarmed","outcrawls","coproducer","limitable","bioengineer","liegemen","explosives","dopiest","poised","midweekly","regionals","chantor","wagons","oversubscribed","distrain","kabiki","safranine","reuttered","placks","uninstalling","seducer","overstimulates","tentoria","superplayers","nondisclosure","parishioners","pervaded","steeplechases","oddnesses","partner","digesting","campstool","breeding","establish","cavitates","subjoining","upclimbed","prows","spancel","haggles","itinerants","surer","pyrophyllites","radically","localisms","hails","elocutionists","famousness","penner","hagbut","saccharoidal","purins","palaestra","waled","tractions","contactors","plaguily","erythropoietin","grans","protopod","debeak","streamed","celadon","whitesmith","alerter","strobilus","silviculturally","coinable","deliveries","unhedged","aggadahs","imagination","incarcerated","arguers","parsec","mehndi","caeoma","overdemanding","ridged","reassails","snipes","arugula","scheme","welled","klutzy","instance","mockingbird","techier","balkier","affine","psylla","rices","saiga","reivers","aria","bibliography","antetype","spheral","ludicrous","blacktopped","wieldy","multicausal","divvies","ash","airfares","wryest","miserly","reswallows","aspires","yellowwood","basilic","geoscientists","gelandesprung","knockout","lycanthropies","hypersalinities","yearbooks","accusing","symphonically","fiacre","cryogenically","acetanilids","phosphoryls","salpas","nitrifier","cirrhotic","lunkhead","polydispersity","humbled","concernment","taxpayer","lymphs","embrocated","entertainment","noneditorial","handsome","transsexuality","saluretic","stupider","cabana","phyllotactic","mimicry","tiller","eyewinks","millwright","streamer","nepeta","cognizes","codeins","feists","karyotypes","please","beclog","attach","monopolizes","hart","enormities","tubas","operatically","shigellae","medullae","alexanders","macroaggregates","briarroots","deplane","persecuted","sprag","mistaker","warmths","horsehides","solanine","wenchers","wintered","conic","births","afforestations","watermanship","lea","spat","spookery","conn","mutability","threatener","acidimeters","guttlers","burbly","furtive","audibled","niftiness","homagers","undecked","particularized","antispam","begin","scroops","enterobacterium","revitalize","meliorate","palazzo","mothproofing","outpowering","amids","abrogates","materialistic","rainbirds","lemmatize","gawkishness","trimaran","inaudibility","compurgator","aequorins","repulse","vowed","cooperation","morellos","oystered","radiosonde","prefacing","gossiped","cranberries","tapiocas","webworks","introject","acoelous","virtually","embordering","babier","palliums","valediction","yerking","triazin","oedemata","cortexes","vitally","kakiemon","overweighs","capitulates","nebbish","pleustons","nameplate","acta","spatially","overstride","proletariats","sheetless","assuredly","louping","senores","intension","financial","inspissates","warmheartedness","tubbinesses","readopted","disgracing","haltering","toolboxes","rubbies","overurges","procedural","forerank","diffusivities","histologically","enures","consignable","uphills","miseases","canoodling","nonfinite","borers","thyme","regions","kiwis","prelacies","epibolic","thrasonically","watercolor","nutbrown","munnion","wonderlands","understrapper","hirable","kopjes","scabies","skirter","cymbaleers","predry","corvet","refrigerants","reverence","relicts","spectroscopic","botanize","regrowing","obtect","rebores","waterside","charbroil","pulmonates","keesters","diplontic","semiannually","frantic","ghettoes","exfoliates","overmixed","gamesome","talcs","foreshowed","renotified","thunderstriking","planktons","prelector","enclasped","alleviation","ammonifying","bummed","chamfrons","aureoled","vawntie","barrator","urping","tenuousness","osteotomy","populaces","epigrammatizes","nonsentences","clapperclawed","routinized","watchables","reciprocated","kidding","planetological","trichopteran","interstadial","significancy","bareboats","prostitutor","mystiques","tinners","bachelordom","translation","boite","quoits","curacies","supremo","remates","pregnability","leapers","mired","pastorium","triumviri","acclamation","tetherballs","inductive","consorts","khet","blurrinesses","purplehearts","stylistic","patinized","eventualities","lordlier","walnuts","polyzoan","extracted","weirdly","inutile","fogbows","polynucleotide","skate","acetose","electrophoresis","psoriatics","conjunctures","curly","mispositioned","linearity","myelitis","trippets","novas","impletions","weasel","sublimate","leafletted","radiograph","distensions","maturated","deterged","maximization","pastitso","moondust","honeymoon","lyart","salters","benignities","ordinand","nitrids","civilising","callowest","appreciations","diplopod","endearing","outbargains","boyfriends","hoptoad","yaws","nonbooks","snubbers","heredes","claquers","agglomerated","lichenin","rampages","tutu","conscience","latherer","surfboarders","tempters","minoxidil","sextans","realgar","overoperates","pasteurize","paradoses","trigraphs","cognizances","parhelia","creped","milage","literary","taramas","rejacketed","oncological","fortunateness","midspaces","kluging","enervating","lissom","visaing","airstreams","microloans","laparotomy","sleeting","dwarfer","preschools","placating","barcas","friarbirds","luxuries","firebomb","fishgigs","eigenvalues","interatomic","biofouling","covenanting","gown","riverweed","preboards","debauchery","synesises","fluorometry","queasinesses","kalsomines","solonchak","bees","desertifying","upshooting","cyclorama","motormouth","nonallergenic","tropicalized","ventriloquizes","redescribes","totalitarianize","troutier","tricyclic","gallic","faggotries","loveliness","megahertzes","carabiner","ensphered","escalader","dignity","geomancy","helots","grafting","binding","jadish","intermediaries","spiraeas","countersued","paperer","incontinences","gingerlinesses","slapdashes","solipsist","bug","upgathering","rebloom","recalled","oxygenless","viceregal","cyclopedias","nonlevel","fastidious","constellating","accessions","veals","staggiest","fullered","badgers","enwrap","copolymerized","erythorbate","quintessence","multileveled","horseraces","immerse","fluidise","chauffeuring","octupling","franticly","stockrooms","augured","greying","diocese","communicator","prelatism","telltales","snooking","interstrand","forrader","mammon","grandams","dish","vails","polyphonic","suspender","duxelles","dogdoms","confectionaries","womanizes","imipramine","statistically","canniness","doggers","unseats","cannibalistic","nonviewer","prepuberty","monocytes","determinate","transitorily","scorer","overfit","equipage","cliticizes","unmaliciously","lancelets","oath","diazotization","haggadistic","halterbreak","postmodernists","groynes","retrodicted","reremind","tullibees","refrigerant","smudginesses","counseled","modalities","overt","nephritides","seizin","screwball","petrified","inquisition","intussusception","chickens","coerects","nilpotent","retaking","tewing","thermoplastic","kebar","solarize","outwatching","graduands","octane","acclimating","megrim","averaged","methysergide","dissertators","upchuck","notochord","atoned","unbandaged","zooms","loathnesses","unbreeched","rataplanning","sandwich","wiry","tutorages","carpetbagged","photospheres","monologging","monied","bedazzle","outranks","peacekeeping","mythologized","aldosteronism","moseying","mealworm","veronica","lyophilizers","thromboplastins","plundering","predecease","sayeds","shoulders","tuyere","flatways","lawlessly","retallied","step","underexpose","totemites","cropper","passe","rosettes","ochreous","unanchored","surcease","impassability","twerps","knobkerries","cauliflowers","interweaving","haft","roughened","dirtiest","queenships","nonlegume","pailful","kerries","ornamenting","quarrier","cultch","edifices","coppersmith","semisweet","firmnesses","prickliest","myalgias","trusteeing","nonphysician","aridly","prologued","candler","ichthyofauna","untwisted","bullishness","nonstarter","seriately","betrayed","mansion","tombola","phalluses","safrols","antismoker","hunting","copier","pipet","glasnosts","pangenetic","precaution","vasotocins","diamondiferous","nitpick","another","monochord","sidearms","samovar","disciplines","wimpled","pastinesses","roughdry","particleboards","obsequies","prescored","sly","parkette","businesspeople","wonkiest","backcourtman","pelagics","foreswearing","headaches","politeness","provincialists","showstopping","exothermicities","weighmen","catjangs","copers","musicologist","unsociableness","pacifists","fraggings","dirks","serenatas","chloroprene","narine","mongolian","duper","ghoulishness","comminatory","racemizes","pyrimidine","turrical","pedicurist","tsked","maxwells","gerardia","grandiloquently","slough","tallyhoing","hight","submersible","divisional","plunks","kingbolt","dailinesses","chignons","accreditations","womanish","elevenses","auditor","actomyosins","feuilletonisms","unharnessing","dreaded","huskier","redefined","warding","isoglossal","orbs","disloyally","tuberculoid","preplans","lectureships","centuries","gasman","barhopped","vessels","veined","chloralose","outsang"];

let selectedWord = words[Math.floor(Math.random() * words.length)]

const correctLetters = [];
const wrongLetters = [];

function displayWord(){
    wordEl.innerHTML = `
        ${selectedWord.split('').map(
                letter => `
                <span class="letter">
                    ${correctLetters.includes(letter) ? letter : ''}
                </span>
            `
            ).join('')}
    `;

    const innerWord = wordEl.innerText.replace(/\n/g, '');

    if(innerWord === selectedWord){
        finalMessage.innerText = 'Congratulations! You Won!';
        popup.style.display = 'flex'
    }
}

function updateWrogLettersEl(){
    wrongLetterEl.innerHTML = `
        ${wrongLetters.length > 0 ? '<p>Wrong</p>':''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

    figureParts.forEach((part,index) => {
        const errors = wrongLetters.length;

        if(index < errors){
            part.style.display = 'block';
        }else{
            part.style.display = 'none';

        }
    })

    if(wrongLetters.length === figureParts.length){
        finalMessage.innerText = 'You\'ve Lost';
        popup.style.display = 'flex';
    }
}

function showNotification(){
    notification.classList.add('show');
    setTimeout(()=>{
        notification.classList.remove('show');
    },1500)
}

window.addEventListener('keydown', e=> {
    if(e.keyCode >= 65 && e.keyCode <= 90){
        const letter = e.key;

        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);

                displayWord();
            }else{
                showNotification();
            }
        }else{
            if(!wrongLetters.includes(letter)){
                wrongLetters.push(letter);

                updateWrogLettersEl();
            }else{
                showNotification();
            }
        }
    }
});

playAgainBtn.addEventListener('click', () => {
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = words[Math.floor(Math.random() * words.length)];

    displayWord();

    updateWrogLettersEl();

    popup.style.display = 'none'
});

displayWord();
