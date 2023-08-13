//https://flagpedia.net/download/api
//https://flagcdn.com/en/codes.json
const flagData = {
  "Andorra": "https://flagcdn.com/h240/ad.png",
  "United Arab Emirates": "https://flagcdn.com/h240/ae.png",
  "Afghanistan": "https://flagcdn.com/h240/af.png",
  "Antigua and Barbuda": "https://flagcdn.com/h240/ag.png",
  "Anguilla": "https://flagcdn.com/h240/ai.png",
  "Albania": "https://flagcdn.com/h240/al.png",
  "Armenia": "https://flagcdn.com/h240/am.png",
  "Angola": "https://flagcdn.com/h240/ao.png",
  "Antarctica": "https://flagcdn.com/h240/aq.png",
  "Argentina": "https://flagcdn.com/h240/ar.png",
  "American Samoa": "https://flagcdn.com/h240/as.png",
  "Austria": "https://flagcdn.com/h240/at.png",
  "Australia": "https://flagcdn.com/h240/au.png",
  "Aruba": "https://flagcdn.com/h240/aw.png",
  "Åland Islands": "https://flagcdn.com/h240/ax.png",
  "Azerbaijan": "https://flagcdn.com/h240/az.png",
  "Bosnia and Herzegovina": "https://flagcdn.com/h240/ba.png",
  "Barbados": "https://flagcdn.com/h240/bb.png",
  "Bangladesh": "https://flagcdn.com/h240/bd.png",
  "Belgium": "https://flagcdn.com/h240/be.png",
  "Burkina Faso": "https://flagcdn.com/h240/bf.png",
  "Bulgaria": "https://flagcdn.com/h240/bg.png",
  "Bahrain": "https://flagcdn.com/h240/bh.png",
  "Burundi": "https://flagcdn.com/h240/bi.png",
  "Benin": "https://flagcdn.com/h240/bj.png",
  "Saint Barthélemy": "https://flagcdn.com/h240/bl.png",
  "Bermuda": "https://flagcdn.com/h240/bm.png",
  "Brunei": "https://flagcdn.com/h240/bn.png",
  "Bolivia": "https://flagcdn.com/h240/bo.png",
  "Caribbean Netherlands": "https://flagcdn.com/h240/bq.png",
  "Brazil": "https://flagcdn.com/h240/br.png",
  "Bahamas": "https://flagcdn.com/h240/bs.png",
  "Bhutan": "https://flagcdn.com/h240/bt.png",
  "Bouvet Island": "https://flagcdn.com/h240/bv.png",
  "Botswana": "https://flagcdn.com/h240/bw.png",
  "Belarus": "https://flagcdn.com/h240/by.png",
  "Belize": "https://flagcdn.com/h240/bz.png",
  "Canada": "https://flagcdn.com/h240/ca.png",
  "Cocos (Keeling) Islands": "https://flagcdn.com/h240/cc.png",
  "DR Congo": "https://flagcdn.com/h240/cd.png",
  "Central African Republic": "https://flagcdn.com/h240/cf.png",
  "Republic of the Congo": "https://flagcdn.com/h240/cg.png",
  "Switzerland": "https://flagcdn.com/h240/ch.png",
  "Ivory Coast": "https://flagcdn.com/h240/ci.png",
  "Cook Islands": "https://flagcdn.com/h240/ck.png",
  "Chile": "https://flagcdn.com/h240/cl.png",
  "Cameroon": "https://flagcdn.com/h240/cm.png",
  "China": "https://flagcdn.com/h240/cn.png",
  "Colombia": "https://flagcdn.com/h240/co.png",
  "Costa Rica": "https://flagcdn.com/h240/cr.png",
  "Cuba": "https://flagcdn.com/h240/cu.png",
  "Cape Verde": "https://flagcdn.com/h240/cv.png",
  "Curaçao": "https://flagcdn.com/h240/cw.png",
  "Christmas Island": "https://flagcdn.com/h240/cx.png",
  "Cyprus": "https://flagcdn.com/h240/cy.png",
  "Czechia": "https://flagcdn.com/h240/cz.png",
  "Germany": "https://flagcdn.com/h240/de.png",
  "Djibouti": "https://flagcdn.com/h240/dj.png",
  "Denmark": "https://flagcdn.com/h240/dk.png",
  "Dominica": "https://flagcdn.com/h240/dm.png",
  "Dominican Republic": "https://flagcdn.com/h240/do.png",
  "Algeria": "https://flagcdn.com/h240/dz.png",
  "Ecuador": "https://flagcdn.com/h240/ec.png",
  "Estonia": "https://flagcdn.com/h240/ee.png",
  "Egypt": "https://flagcdn.com/h240/eg.png",
  "Western Sahara": "https://flagcdn.com/h240/eh.png",
  "Eritrea": "https://flagcdn.com/h240/er.png",
  "Spain": "https://flagcdn.com/h240/es.png",
  "Ethiopia": "https://flagcdn.com/h240/et.png",
  "European Union": "https://flagcdn.com/h240/eu.png",
  "Finland": "https://flagcdn.com/h240/fi.png",
  "Fiji": "https://flagcdn.com/h240/fj.png",
  "Falkland Islands": "https://flagcdn.com/h240/fk.png",
  "Micronesia": "https://flagcdn.com/h240/fm.png",
  "Faroe Islands": "https://flagcdn.com/h240/fo.png",
  "France": "https://flagcdn.com/h240/fr.png",
  "Gabon": "https://flagcdn.com/h240/ga.png",
  "United Kingdom": "https://flagcdn.com/h240/gb.png",
  "England": "https://flagcdn.com/h240/gb-eng.png",
  "Northern Ireland": "https://flagcdn.com/h240/gb-nir.png",
  "Scotland": "https://flagcdn.com/h240/gb-sct.png",
  "Wales": "https://flagcdn.com/h240/gb-wls.png",
  "Grenada": "https://flagcdn.com/h240/gd.png",
  "Georgia": "https://flagcdn.com/h240/ge.png",
  "French Guiana": "https://flagcdn.com/h240/gf.png",
  "Guernsey": "https://flagcdn.com/h240/gg.png",
  "Ghana": "https://flagcdn.com/h240/gh.png",
  "Gibraltar": "https://flagcdn.com/h240/gi.png",
  "Greenland": "https://flagcdn.com/h240/gl.png",
  "Gambia": "https://flagcdn.com/h240/gm.png",
  "Guinea": "https://flagcdn.com/h240/gn.png",
  "Guadeloupe": "https://flagcdn.com/h240/gp.png",
  "Equatorial Guinea": "https://flagcdn.com/h240/gq.png",
  "Greece": "https://flagcdn.com/h240/gr.png",
  "South Georgia": "https://flagcdn.com/h240/gs.png",
  "Guatemala": "https://flagcdn.com/h240/gt.png",
  "Guam": "https://flagcdn.com/h240/gu.png",
  "Guinea-Bissau": "https://flagcdn.com/h240/gw.png",
  "Guyana": "https://flagcdn.com/h240/gy.png",
  "Hong Kong": "https://flagcdn.com/h240/hk.png",
  "Heard Island and McDonald Islands": "https://flagcdn.com/h240/hm.png",
  "Honduras": "https://flagcdn.com/h240/hn.png",
  "Croatia": "https://flagcdn.com/h240/hr.png",
  "Haiti": "https://flagcdn.com/h240/ht.png",
  "Hungary": "https://flagcdn.com/h240/hu.png",
  "Indonesia": "https://flagcdn.com/h240/id.png",
  "Ireland": "https://flagcdn.com/h240/ie.png",
  "Israel": "https://flagcdn.com/h240/il.png",
  "Isle of Man": "https://flagcdn.com/h240/im.png",
  "India": "https://flagcdn.com/h240/in.png",
  "British Indian Ocean Territory": "https://flagcdn.com/h240/io.png",
  "Iraq": "https://flagcdn.com/h240/iq.png",
  "Iran": "https://flagcdn.com/h240/ir.png",
  "Iceland": "https://flagcdn.com/h240/is.png",
  "Italy": "https://flagcdn.com/h240/it.png",
  "Jersey": "https://flagcdn.com/h240/je.png",
  "Jamaica": "https://flagcdn.com/h240/jm.png",
  "Jordan": "https://flagcdn.com/h240/jo.png",
  "Japan": "https://flagcdn.com/h240/jp.png",
  "Kenya": "https://flagcdn.com/h240/ke.png",
  "Kyrgyzstan": "https://flagcdn.com/h240/kg.png",
  "Cambodia": "https://flagcdn.com/h240/kh.png",
  "Kiribati": "https://flagcdn.com/h240/ki.png",
  "Comoros": "https://flagcdn.com/h240/km.png",
  "Saint Kitts and Nevis": "https://flagcdn.com/h240/kn.png",
  "North Korea": "https://flagcdn.com/h240/kp.png",
  "South Korea": "https://flagcdn.com/h240/kr.png",
  "Kuwait": "https://flagcdn.com/h240/kw.png",
  "Cayman Islands": "https://flagcdn.com/h240/ky.png",
  "Kazakhstan": "https://flagcdn.com/h240/kz.png",
  "Laos": "https://flagcdn.com/h240/la.png",
  "Lebanon": "https://flagcdn.com/h240/lb.png",
  "Saint Lucia": "https://flagcdn.com/h240/lc.png",
  "Liechtenstein": "https://flagcdn.com/h240/li.png",
  "Sri Lanka": "https://flagcdn.com/h240/lk.png",
  "Liberia": "https://flagcdn.com/h240/lr.png",
  "Lesotho": "https://flagcdn.com/h240/ls.png",
  "Lithuania": "https://flagcdn.com/h240/lt.png",
  "Luxembourg": "https://flagcdn.com/h240/lu.png",
  "Latvia": "https://flagcdn.com/h240/lv.png",
  "Libya": "https://flagcdn.com/h240/ly.png",
  "Morocco": "https://flagcdn.com/h240/ma.png",
  "Monaco": "https://flagcdn.com/h240/mc.png",
  "Moldova": "https://flagcdn.com/h240/md.png",
  "Montenegro": "https://flagcdn.com/h240/me.png",
  "Saint Martin": "https://flagcdn.com/h240/mf.png",
  "Madagascar": "https://flagcdn.com/h240/mg.png",
  "Marshall Islands": "https://flagcdn.com/h240/mh.png",
  "North Macedonia": "https://flagcdn.com/h240/mk.png",
  "Mali": "https://flagcdn.com/h240/ml.png",
  "Myanmar": "https://flagcdn.com/h240/mm.png",
  "Mongolia": "https://flagcdn.com/h240/mn.png",
  "Macau": "https://flagcdn.com/h240/mo.png",
  "Northern Mariana Islands": "https://flagcdn.com/h240/mp.png",
  "Martinique": "https://flagcdn.com/h240/mq.png",
  "Mauritania": "https://flagcdn.com/h240/mr.png",
  "Montserrat": "https://flagcdn.com/h240/ms.png",
  "Malta": "https://flagcdn.com/h240/mt.png",
  "Mauritius": "https://flagcdn.com/h240/mu.png",
  "Maldives": "https://flagcdn.com/h240/mv.png",
  "Malawi": "https://flagcdn.com/h240/mw.png",
  "Mexico": "https://flagcdn.com/h240/mx.png",
  "Malaysia": "https://flagcdn.com/h240/my.png",
  "Mozambique": "https://flagcdn.com/h240/mz.png",
  "Namibia": "https://flagcdn.com/h240/na.png",
  "New Caledonia": "https://flagcdn.com/h240/nc.png",
  "Niger": "https://flagcdn.com/h240/ne.png",
  "Norfolk Island": "https://flagcdn.com/h240/nf.png",
  "Nigeria": "https://flagcdn.com/h240/ng.png",
  "Nicaragua": "https://flagcdn.com/h240/ni.png",
  "Netherlands": "https://flagcdn.com/h240/nl.png",
  "Norway": "https://flagcdn.com/h240/no.png",
  "Nepal": "https://flagcdn.com/h240/np.png",
  "Nauru": "https://flagcdn.com/h240/nr.png",
  "Niue": "https://flagcdn.com/h240/nu.png",
  "New Zealand": "https://flagcdn.com/h240/nz.png",
  "Oman": "https://flagcdn.com/h240/om.png",
  "Panama": "https://flagcdn.com/h240/pa.png",
  "Peru": "https://flagcdn.com/h240/pe.png",
  "French Polynesia": "https://flagcdn.com/h240/pf.png",
  "Papua New Guinea": "https://flagcdn.com/h240/pg.png",
  "Philippines": "https://flagcdn.com/h240/ph.png",
  "Pakistan": "https://flagcdn.com/h240/pk.png",
  "Poland": "https://flagcdn.com/h240/pl.png",
  "Saint Pierre and Miquelon": "https://flagcdn.com/h240/pm.png",
  "Pitcairn Islands": "https://flagcdn.com/h240/pn.png",
  "Puerto Rico": "https://flagcdn.com/h240/pr.png",
  "Palestine": "https://flagcdn.com/h240/ps.png",
  "Portugal": "https://flagcdn.com/h240/pt.png",
  "Palau": "https://flagcdn.com/h240/pw.png",
  "Paraguay": "https://flagcdn.com/h240/py.png",
  "Qatar": "https://flagcdn.com/h240/qa.png",
  "Réunion": "https://flagcdn.com/h240/re.png",
  "Romania": "https://flagcdn.com/h240/ro.png",
  "Serbia": "https://flagcdn.com/h240/rs.png",
  "Russia": "https://flagcdn.com/h240/ru.png",
  "Rwanda": "https://flagcdn.com/h240/rw.png",
  "Saudi Arabia": "https://flagcdn.com/h240/sa.png",
  "Solomon Islands": "https://flagcdn.com/h240/sb.png",
  "Seychelles": "https://flagcdn.com/h240/sc.png",
  "Sudan": "https://flagcdn.com/h240/sd.png",
  "Sweden": "https://flagcdn.com/h240/se.png",
  "Singapore": "https://flagcdn.com/h240/sg.png",
  "Saint Helena, Ascension and Tristan da Cunha": "https://flagcdn.com/h240/sh.png",
  "Slovenia": "https://flagcdn.com/h240/si.png",
  "Svalbard and Jan Mayen": "https://flagcdn.com/h240/sj.png",
  "Slovakia": "https://flagcdn.com/h240/sk.png",
  "Sierra Leone": "https://flagcdn.com/h240/sl.png",
  "San Marino": "https://flagcdn.com/h240/sm.png",
  "Senegal": "https://flagcdn.com/h240/sn.png",
  "Somalia": "https://flagcdn.com/h240/so.png",
  "Suriname": "https://flagcdn.com/h240/sr.png",
  "South Sudan": "https://flagcdn.com/h240/ss.png",
  "São Tomé and Príncipe": "https://flagcdn.com/h240/st.png",
  "El Salvador": "https://flagcdn.com/h240/sv.png",
  "Sint Maarten": "https://flagcdn.com/h240/sx.png",
  "Syria": "https://flagcdn.com/h240/sy.png",
  "Swaziland": "https://flagcdn.com/h240/sz.png",
  "Turks and Caicos Islands": "https://flagcdn.com/h240/tc.png",
  "Chad": "https://flagcdn.com/h240/td.png",
  "French Southern and Antarctic Lands": "https://flagcdn.com/h240/tf.png",
  "Togo": "https://flagcdn.com/h240/tg.png",
  "Thailand": "https://flagcdn.com/h240/th.png",
  "Tajikistan": "https://flagcdn.com/h240/tj.png",
  "Tokelau": "https://flagcdn.com/h240/tk.png",
  "Timor-Leste": "https://flagcdn.com/h240/tl.png",
  "Turkmenistan": "https://flagcdn.com/h240/tm.png",
  "Tunisia": "https://flagcdn.com/h240/tn.png",
  "Tonga": "https://flagcdn.com/h240/to.png",
  "Turkey": "https://flagcdn.com/h240/tr.png",
  "Trinidad and Tobago": "https://flagcdn.com/h240/tt.png",
  "Tuvalu": "https://flagcdn.com/h240/tv.png",
  "Taiwan": "https://flagcdn.com/h240/tw.png",
  "Tanzania": "https://flagcdn.com/h240/tz.png",
  "Ukraine": "https://flagcdn.com/h240/ua.png",
  "Uganda": "https://flagcdn.com/h240/ug.png",
  "United Nations": "https://flagcdn.com/h240/un.png",
  "United States of America": "https://flagcdn.com/h240/us.png",
  "Uruguay": "https://flagcdn.com/h240/uy.png",
  "Uzbekistan": "https://flagcdn.com/h240/uz.png",
  "Vatican City": "https://flagcdn.com/h240/va.png",
  "Saint Vincent and the Grenadines": "https://flagcdn.com/h240/vc.png",
  "Venezuela": "https://flagcdn.com/h240/ve.png",
  "British Virgin Islands": "https://flagcdn.com/h240/vg.png",
  "United States Virgin Islands": "https://flagcdn.com/h240/vi.png",
  "Vietnam": "https://flagcdn.com/h240/vn.png",
  "Vanuatu": "https://flagcdn.com/h240/vu.png",
  "Wallis and Futuna": "https://flagcdn.com/h240/wf.png",
  "Samoa": "https://flagcdn.com/h240/ws.png",
  "Yemen": "https://flagcdn.com/h240/ye.png",
  "Mayotte": "https://flagcdn.com/h240/yt.png",
  "South Africa": "https://flagcdn.com/h240/za.png",
  "Zambia": "https://flagcdn.com/h240/zm.png",
  "Zimbabwe": "https://flagcdn.com/h240/zw.png"
};

export default flagData;

// const flagData = {
//     "ad": "https://flagcdn.com/h240/ad.png",
//     "ae": "https://flagcdn.com/h240/ae.png",
//     "af": "https://flagcdn.com/h240/af.png",
//     "ag": "https://flagcdn.com/h240/ag.png",
//     "ai": "https://flagcdn.com/h240/ai.png",
//     "al": "https://flagcdn.com/h240/al.png",
//     "am": "https://flagcdn.com/h240/am.png",
//     "ao": "https://flagcdn.com/h240/ao.png",
//     "aq": "https://flagcdn.com/h240/aq.png",
//     "ar": "https://flagcdn.com/h240/ar.png",
//     "as": "https://flagcdn.com/h240/as.png",
//     "at": "https://flagcdn.com/h240/at.png",
//     "au": "https://flagcdn.com/h240/au.png",
//     "aw": "https://flagcdn.com/h240/aw.png",
//     "ax": "https://flagcdn.com/h240/ax.png",
//     "az": "https://flagcdn.com/h240/az.png",
//     "ba": "https://flagcdn.com/h240/ba.png",
//     "bb": "https://flagcdn.com/h240/bb.png",
//     "bd": "https://flagcdn.com/h240/bd.png",
//     "be": "https://flagcdn.com/h240/be.png",
//     "bf": "https://flagcdn.com/h240/bf.png",
//     "bg": "https://flagcdn.com/h240/bg.png",
//     "bh": "https://flagcdn.com/h240/bh.png",
//     "bi": "https://flagcdn.com/h240/bi.png",
//     "bj": "https://flagcdn.com/h240/bj.png",
//     "bl": "https://flagcdn.com/h240/bl.png",
//     "bm": "https://flagcdn.com/h240/bm.png",
//     "bn": "https://flagcdn.com/h240/bn.png",
//     "bo": "https://flagcdn.com/h240/bo.png",
//     "bq": "https://flagcdn.com/h240/bq.png",
//     "br": "https://flagcdn.com/h240/br.png",
//     "bs": "https://flagcdn.com/h240/bs.png",
//     "bt": "https://flagcdn.com/h240/bt.png",
//     "bv": "https://flagcdn.com/h240/bv.png",
//     "bw": "https://flagcdn.com/h240/bw.png",
//     "by": "https://flagcdn.com/h240/by.png",
//     "bz": "https://flagcdn.com/h240/bz.png",
//     "ca": "https://flagcdn.com/h240/ca.png",
//     "cc": "https://flagcdn.com/h240/cc.png",
//     "cd": "https://flagcdn.com/h240/cd.png",
//     "cf": "https://flagcdn.com/h240/cf.png",
//     "cg": "https://flagcdn.com/h240/cg.png",
//     "ch": "https://flagcdn.com/h240/ch.png",
//     "ci": "https://flagcdn.com/h240/ci.png",
//     "ck": "https://flagcdn.com/h240/ck.png",
//     "cl": "https://flagcdn.com/h240/cl.png",
//     "cm": "https://flagcdn.com/h240/cm.png",
//     "cn": "https://flagcdn.com/h240/cn.png",
//     "co": "https://flagcdn.com/h240/co.png",
//     "cr": "https://flagcdn.com/h240/cr.png",
//     "cu": "https://flagcdn.com/h240/cu.png",
//     "cv": "https://flagcdn.com/h240/cv.png",
//     "cw": "https://flagcdn.com/h240/cw.png",
//     "cx": "https://flagcdn.com/h240/cx.png",
//     "cy": "https://flagcdn.com/h240/cy.png",
//     "cz": "https://flagcdn.com/h240/cz.png",
//     "de": "https://flagcdn.com/h240/de.png",
//     "dj": "https://flagcdn.com/h240/dj.png",
//     "dk": "https://flagcdn.com/h240/dk.png",
//     "dm": "https://flagcdn.com/h240/dm.png",
//     "do": "https://flagcdn.com/h240/do.png",
//     "dz": "https://flagcdn.com/h240/dz.png",
//     "ec": "https://flagcdn.com/h240/ec.png",
//     "ee": "https://flagcdn.com/h240/ee.png",
//     "eg": "https://flagcdn.com/h240/eg.png",
//     "eh": "https://flagcdn.com/h240/eh.png",
//     "er": "https://flagcdn.com/h240/er.png",
//     "es": "https://flagcdn.com/h240/es.png",
//     "et": "https://flagcdn.com/h240/et.png",
//     "eu": "https://flagcdn.com/h240/eu.png",
//     "fi": "https://flagcdn.com/h240/fi.png",
//     "fj": "https://flagcdn.com/h240/fj.png",
//     "fk": "https://flagcdn.com/h240/fk.png",
//     "fm": "https://flagcdn.com/h240/fm.png",
//     "fo": "https://flagcdn.com/h240/fo.png",
//     "fr": "https://flagcdn.com/h240/fr.png",
//     "ga": "https://flagcdn.com/h240/ga.png",
//     "gb": "https://flagcdn.com/h240/gb.png",
//     "gb-eng": "https://flagcdn.com/h240/gb-eng.png",
//     "gb-nir": "https://flagcdn.com/h240/gb-nir.png",
//     "gb-sct": "https://flagcdn.com/h240/gb-sct.png",
//     "gb-wls": "https://flagcdn.com/h240/gb-wls.png",
//     "gd": "https://flagcdn.com/h240/gd.png",
//     "ge": "https://flagcdn.com/h240/ge.png",
//     "gf": "https://flagcdn.com/h240/gf.png",
//     "gg": "https://flagcdn.com/h240/gg.png",
//     "gh": "https://flagcdn.com/h240/gh.png",
//     "gi": "https://flagcdn.com/h240/gi.png",
//     "gl": "https://flagcdn.com/h240/gl.png",
//     "gm": "https://flagcdn.com/h240/gm.png",
//     "gn": "https://flagcdn.com/h240/gn.png",
//     "gp": "https://flagcdn.com/h240/gp.png",
//     "gq": "https://flagcdn.com/h240/gq.png",
//     "gr": "https://flagcdn.com/h240/gr.png",
//     "gs": "https://flagcdn.com/h240/gs.png",
//     "gt": "https://flagcdn.com/h240/gt.png",
//     "gu": "https://flagcdn.com/h240/gu.png",
//     "gw": "https://flagcdn.com/h240/gw.png",
//     "gy": "https://flagcdn.com/h240/gy.png",
//     "hk": "https://flagcdn.com/h240/hk.png",
//     "hm": "https://flagcdn.com/h240/hm.png",
//     "hn": "https://flagcdn.com/h240/hn.png",
//     "hr": "https://flagcdn.com/h240/hr.png",
//     "ht": "https://flagcdn.com/h240/ht.png",
//     "hu": "https://flagcdn.com/h240/hu.png",
//     "id": "https://flagcdn.com/h240/id.png",
//     "ie": "https://flagcdn.com/h240/ie.png",
//     "il": "https://flagcdn.com/h240/il.png",
//     "im": "https://flagcdn.com/h240/im.png",
//     "in": "https://flagcdn.com/h240/in.png",
//     "io": "https://flagcdn.com/h240/io.png",
//     "iq": "https://flagcdn.com/h240/iq.png",
//     "ir": "https://flagcdn.com/h240/ir.png",
//     "is": "https://flagcdn.com/h240/is.png",
//     "it": "https://flagcdn.com/h240/it.png",
//     "je": "https://flagcdn.com/h240/je.png",
//     "jm": "https://flagcdn.com/h240/jm.png",
//     "jo": "https://flagcdn.com/h240/jo.png",
//     "jp": "https://flagcdn.com/h240/jp.png",
//     "ke": "https://flagcdn.com/h240/ke.png",
//     "kg": "https://flagcdn.com/h240/kg.png",
//     "kh": "https://flagcdn.com/h240/kh.png",
//     "ki": "https://flagcdn.com/h240/ki.png",
//     "km": "https://flagcdn.com/h240/km.png",
//     "kn": "https://flagcdn.com/h240/kn.png",
//     "kp": "https://flagcdn.com/h240/kp.png",
//     "kr": "https://flagcdn.com/h240/kr.png",
//     "kw": "https://flagcdn.com/h240/kw.png",
//     "ky": "https://flagcdn.com/h240/ky.png",
//     "kz": "https://flagcdn.com/h240/kz.png",
//     "la": "https://flagcdn.com/h240/la.png",
//     "lb": "https://flagcdn.com/h240/lb.png",
//     "lc": "https://flagcdn.com/h240/lc.png",
//     "li": "https://flagcdn.com/h240/li.png",
//     "lk": "https://flagcdn.com/h240/lk.png",
//     "lr": "https://flagcdn.com/h240/lr.png",
//     "ls": "https://flagcdn.com/h240/ls.png",
//     "lt": "https://flagcdn.com/h240/lt.png",
//     "lu": "https://flagcdn.com/h240/lu.png",
//     "lv": "https://flagcdn.com/h240/lv.png",
//     "ly": "https://flagcdn.com/h240/ly.png",
//     "ma": "https://flagcdn.com/h240/ma.png",
//     "mc": "https://flagcdn.com/h240/mc.png",
//     "md": "https://flagcdn.com/h240/md.png",
//     "me": "https://flagcdn.com/h240/me.png",
//     "mf": "https://flagcdn.com/h240/mf.png",
//     "mg": "https://flagcdn.com/h240/mg.png",
//     "mh": "https://flagcdn.com/h240/mh.png",
//     "mk": "https://flagcdn.com/h240/mk.png",
//     "ml": "https://flagcdn.com/h240/ml.png",
//     "mm": "https://flagcdn.com/h240/mm.png",
//     "mn": "https://flagcdn.com/h240/mn.png",
//     "mo": "https://flagcdn.com/h240/mo.png",
//     "mp": "https://flagcdn.com/h240/mp.png",
//     "mq": "https://flagcdn.com/h240/mq.png",
//     "mr": "https://flagcdn.com/h240/mr.png",
//     "ms": "https://flagcdn.com/h240/ms.png",
//     "mt": "https://flagcdn.com/h240/mt.png",
//     "mu": "https://flagcdn.com/h240/mu.png",
//     "mv": "https://flagcdn.com/h240/mv.png",
//     "mw": "https://flagcdn.com/h240/mw.png",
//     "mx": "https://flagcdn.com/h240/mx.png",
//     "my": "https://flagcdn.com/h240/my.png",
//     "mz": "https://flagcdn.com/h240/mz.png",
//     "na": "https://flagcdn.com/h240/na.png",
//     "nc": "https://flagcdn.com/h240/nc.png",
//     "ne": "https://flagcdn.com/h240/ne.png",
//     "nf": "https://flagcdn.com/h240/nf.png",
//     "ng": "https://flagcdn.com/h240/ng.png",
//     "ni": "https://flagcdn.com/h240/ni.png",
//     "nl": "https://flagcdn.com/h240/nl.png",
//     "no": "https://flagcdn.com/h240/no.png",
//     "np": "https://flagcdn.com/h240/np.png",
//     "nr": "https://flagcdn.com/h240/nr.png",
//     "nu": "https://flagcdn.com/h240/nu.png",
//     "nz": "https://flagcdn.com/h240/nz.png",
//     "om": "https://flagcdn.com/h240/om.png",
//     "pa": "https://flagcdn.com/h240/pa.png",
//     "pe": "https://flagcdn.com/h240/pe.png",
//     "pf": "https://flagcdn.com/h240/pf.png",
//     "pg": "https://flagcdn.com/h240/pg.png",
//     "ph": "https://flagcdn.com/h240/ph.png",
//     "pk": "https://flagcdn.com/h240/pk.png",
//     "pl": "https://flagcdn.com/h240/pl.png",
//     "pm": "https://flagcdn.com/h240/pm.png",
//     "pn": "https://flagcdn.com/h240/pn.png",
//     "pr": "https://flagcdn.com/h240/pr.png",
//     "ps": "https://flagcdn.com/h240/ps.png",
//     "pt": "https://flagcdn.com/h240/pt.png",
//     "pw": "https://flagcdn.com/h240/pw.png",
//     "py": "https://flagcdn.com/h240/py.png",
//     "qa": "https://flagcdn.com/h240/qa.png",
//     "re": "https://flagcdn.com/h240/re.png",
//     "ro": "https://flagcdn.com/h240/ro.png",
//     "rs": "https://flagcdn.com/h240/rs.png",
//     "ru": "https://flagcdn.com/h240/ru.png",
//     "rw": "https://flagcdn.com/h240/rw.png",
//     "sa": "https://flagcdn.com/h240/sa.png",
//     "sb": "https://flagcdn.com/h240/sb.png",
//     "sc": "https://flagcdn.com/h240/sc.png",
//     "sd": "https://flagcdn.com/h240/sd.png",
//     "se": "https://flagcdn.com/h240/se.png",
//     "sg": "https://flagcdn.com/h240/sg.png",
//     "sh": "https://flagcdn.com/h240/sh.png",
//     "si": "https://flagcdn.com/h240/si.png",
//     "sj": "https://flagcdn.com/h240/sj.png",
//     "sk": "https://flagcdn.com/h240/sk.png",
//     "sl": "https://flagcdn.com/h240/sl.png",
//     "sm": "https://flagcdn.com/h240/sm.png",
//     "sn": "https://flagcdn.com/h240/sn.png",
//     "so": "https://flagcdn.com/h240/so.png",
//     "sr": "https://flagcdn.com/h240/sr.png",
//     "ss": "https://flagcdn.com/h240/ss.png",
//     "st": "https://flagcdn.com/h240/st.png",
//     "sv": "https://flagcdn.com/h240/sv.png",
//     "sx": "https://flagcdn.com/h240/sx.png",
//     "sy": "https://flagcdn.com/h240/sy.png",
//     "sz": "https://flagcdn.com/h240/sz.png",
//     "tc": "https://flagcdn.com/h240/tc.png",
//     "td": "https://flagcdn.com/h240/td.png",
//     "tf": "https://flagcdn.com/h240/tf.png",
//     "tg": "https://flagcdn.com/h240/tg.png",
//     "th": "https://flagcdn.com/h240/th.png",
//     "tj": "https://flagcdn.com/h240/tj.png",
//     "tk": "https://flagcdn.com/h240/tk.png",
//     "tl": "https://flagcdn.com/h240/tl.png",
//     "tm": "https://flagcdn.com/h240/tm.png",
//     "tn": "https://flagcdn.com/h240/tn.png",
//     "to": "https://flagcdn.com/h240/to.png",
//     "tr": "https://flagcdn.com/h240/tr.png",
//     "tt": "https://flagcdn.com/h240/tt.png",
//     "tv": "https://flagcdn.com/h240/tv.png",
//     "tw": "https://flagcdn.com/h240/tw.png",
//     "tz": "https://flagcdn.com/h240/tz.png",
//     "ua": "https://flagcdn.com/h240/ua.png",
//     "ug": "https://flagcdn.com/h240/ug.png",
//     "um": "https://flagcdn.com/h240/um.png",
//     "un": "https://flagcdn.com/h240/un.png",
//     "us": "https://flagcdn.com/h240/us.png",
//     "uy": "https://flagcdn.com/h240/uy.png",
//     "uz": "https://flagcdn.com/h240/uz.png",
//     "va": "https://flagcdn.com/h240/va.png",
//     "vc": "https://flagcdn.com/h240/vc.png",
//     "ve": "https://flagcdn.com/h240/ve.png",
//     "vg": "https://flagcdn.com/h240/vg.png",
//     "vi": "https://flagcdn.com/h240/vi.png",
//     "vn": "https://flagcdn.com/h240/vn.png",
//     "vu": "https://flagcdn.com/h240/vu.png",
//     "wf": "https://flagcdn.com/h240/wf.png",
//     "ws": "https://flagcdn.com/h240/ws.png",
//     "ye": "https://flagcdn.com/h240/ye.png",
//     "yt": "https://flagcdn.com/h240/yt.png",
//     "za": "https://flagcdn.com/h240/za.png",
//     "zm": "https://flagcdn.com/h240/zm.png",
//     "zw": "https://flagcdn.com/h240/zw.png"
//   };