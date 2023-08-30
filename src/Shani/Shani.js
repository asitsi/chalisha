import React from 'react'
import Header from '../Header/Header';
import { Helmet } from 'react-helmet';

const Shani = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Shani Chalisha</title>
                <link rel="canonical" href="../assests/image/favicon.ico" />
            </Helmet>

            <div className='container'>
                <div className='row'>
                    <Header text={'Hanumaan Chalisha'} />
                    <div>
                        {Doha.length > 0 && Doha.map((item, index) => {
                            return <strong key={index}>{item.doha}<br /></strong>
                        })}
                    </div>
                    <div className='row'>
                        {Chalisha.length > 0 && Chalisha.map((item, index) => {
                            return <p key={index}>{item.chopai.split(" | ")[0]}<br /></p>
                        })}
                    </div>

                    <div>
                        {Doha2.length > 0 && Doha2.map((item, index) => {
                            return <strong key={index}>{item.doha.match(/^[^|]*/)[0]}<br /></strong>
                        })}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Shani;

const Doha = [
    { doha: "जय गणेश गिरिजा सुवन, मंगल करण कृपाल। दीनन के दुख दूर करि, कीजै नाथ निहाल॥" },
    { doha: "जय जय श्री शनिदेव प्रभु, सुनहु विनय महाराज। करहु कृपा हे रवि तनय, राखहु जन की लाज॥"}
];

const Chalisha = [
    { chopai: "जयति जयति शनिदेव दयाला। करत सदा भक्तन प्रतिपाला॥" },
    { chopai: "चारि भुजा, तनु श्याम विराजै। माथे रतन मुकुट छबि छाजै॥" },
    { chopai: "महावीर विक्रम बजरंगी। कुमति निवार सुमति के संगी॥" },
    { chopai: "कंचन बरन बिराज सुबेसा। कानन कुंडल कुंचित केसा॥" },
    { chopai: "हाथ बज्र औ ध्वजा बिराजै। कांधे मूँज जनेऊ साजै॥" },
    { chopai: "संकर सुवन केसरीनंदन। तेज प्रताप महा जगबंदन॥" },
    { chopai: "विद्यावान गुनी अति चातुर। राम काज करिबे को आतुर॥" },
    { chopai: "प्रभु चरित्र सुनिबे को रसिया। राम लखन सीता मन बसिया॥" },
    { chopai: "सूक्ष्म रूप धरि सियहिं दिखावा। विकट रूप धरि लंक जरावा॥" },
    { chopai: "भीम रूप धरि असुर संहारे। रामचंद्र के काज संवारे॥" },
    { chopai: "लाय संजीवनि लखन जियाये। श्रीरघुबीर हरषि उर लाये॥" },
    { chopai: "रघुपति कीन्हीं बहुत बड़ाई। तुम मम प्रिय भरतहि सम भाई॥" },
    { chopai: "सहस बदन तुम्हरो यश गावैं। अस कहि श्रीपति कंठ लगावैं॥" },
    { chopai: "सनकादिक ब्रह्मादि मुनीसा। नारद सारद सहित अहीसा॥" },
    { chopai: "जम कुबेर दिगपाल जहां ते। कवि कोबिद कहि सके कहां ते॥" },
    { chopai: "तुम उपकार सुग्रीवहिं कीन्हा। राम मिलाय राज पद दीन्हा॥" },
    { chopai: "तुम्हरो मंत्र बिभीषन माना। लंकेश्वर भए सब जग जाना॥" },
    { chopai: "युग सहस्र योजन पर भानू। लील्यो ताहि मधुर फल जानू॥" },
    { chopai: "प्रभु मुद्रिका मेलि मुख माहीं। जलधि लांघि गये अचरज नाहीं॥" },
    { chopai: "दुर्गम काज जगत के जेते। सुगम अनुग्रह तुम्हरे तेते॥" },
    { chopai: "राम दुआरे तुम रखवारे। होत न आज्ञा बिन पैसारे॥" },
    { chopai: "सब सुख लहै तुम्हारी शरणा। तुम रक्षक काहू को डरना॥" },
    { chopai: "आपन तेज सम्हारो आपै। तीनों लोक हांक तें कांपै॥" },
    { chopai: "भूत पिसाच निकट नहिं आवै। महाबीर जब नाम सुनावै॥" },
    { chopai: "नासै रोग हरै सब पीरा। जपत निरंतर हनुमत बीरा॥" },
    { chopai: "संकट तें हनुमान छुड़ावै। मन क्रम वचन ध्यान जो लावै॥" },
    { chopai: "सब पर राम तपस्वी राजा। तिनके काज सकल तुम साजा॥" },
    { chopai: "और मनोरथ जो कोई लावै। सोई अमित जीवन फल पावै॥" },
    { chopai: "चारों जुग परताप तुम्हारा। है परसिद्ध जगत उजियारा॥" },
    { chopai: "साधु संत के तुम रखवारे। असुर निकंदन राम दुलारे॥" },
    { chopai: "अष्ट सिद्धि नौ निधि के दाता। अस बर दीन जानकी माता॥" },
    { chopai: "राम रसायन तुम्हरे पासा। सदा रहो रघुपति के दासा॥" },
    { chopai: "तुम्हरे भजन राम को पावै। जनम जनम के दुख बिसरावै॥" },
    { chopai: "अन्त काल रघुवर पुर जाई। जहां जन्म हरिभक्त कहाई॥" },
    { chopai: "और देवता चित्त न धरई। हनुमत सेइ सर्व सुख करई॥" },
    { chopai: "संकट कटै मिटै सब पीरा। जो सुमिरै हनुमत बलबीरा॥" },
    { chopai: "जै जै जै हनुमान गोसाईं। कृपा करहु गुरुदेव की नाईं॥" },
    { chopai: "जो सत बार पाठ कर कोई। छूटहि बंदि महा सुख होई॥" },
    { chopai: "जो यह पढ़ै हनुमान चालीसा। होय सिद्धि साखी गौरीसा॥" },
    { chopai: "तुलसीदास सदा हरि चेरा। कीजै नाथ हृदय महँ डेरा॥" }
];

const Doha2 = [
    { doha: "पाठ शनिश्चर देव को, की हों 'भक्त' तैयार। करत पाठ चालीस दिन, हो भवसागर पार॥" },
];