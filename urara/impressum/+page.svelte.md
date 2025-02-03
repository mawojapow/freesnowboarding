---
created: 2017-8-2
title: Privacy Policy
image: '/impressum/spider-man.jpeg'
alt: 'MjW'
summary: Datenschutzerklärung
---

<p><a href="https://twitter.com/ComplexPop/status/1496494142641344518/photo/2">Twitter by Complex Pop Culture</a>

<script>
	const playlist = [
		{
			artist: 'Mystic Brew @Blue Note Records 1. Januar 1995 prod. by Dr. George Butler',
			name: 'Ronnie Foster',
			audio: `/impressum/RonnieFosterMysticBrew.mp3`
		}
	]

	let playingState = 'playing'
	let songPlayingIndex = 0
	let song = null
	let initB = true
	
	if(initB == true)
	{
		song = new Audio(playlist[songPlayingIndex].audio)
    		song.volume = 0.2
		song.play()
		initB=false
	}
	
	function handleClickOutside(event) {
		pause()
	}

    function togglePlaying() {
    	playingState === 'paused'? play() : pause()
    }

    function loadSong() {
    	song = new Audio(playlist[songPlayingIndex].audio)
    	song.volume = 0.2
    	song.play()
    }

    function play() {
    	if (playingState === 'playing') {
    		pause()
    	}

    	playingState = 'playing'
    	loadSong()
    }

    function playSelectedSong(event) {
    	const songIndex = +event.target.dataset.index

    	if (songIndex === songPlayingIndex) {
    		songPlayingIndex = null
    		return pause()
    	}

    	songPlayingIndex = songIndex
    	play()
    }

    function scrollPlay() {
        songPlayingIndex=0
    	playingState = 'playing'
    	loadSong()
    }

    function pause() {
    	playingState = 'paused'
    	song.pause()
    }

</script>

<div class="player">
	<div class="playlist">	
		{#each playlist as song, index}
			<div class:playing={index === songPlayingIndex} class="song">
				<button data-index={index} on:click={playSelectedSong}>
					{playingState === 'playing' && index === songPlayingIndex ? '⏯️' : '▶️'}
				</button>
				<span>{song.name} - {song.artist}</span>
			</div>
		{/each}
	</div>
</div>

<div class="player">
	<div class="playlist">	
		{#each playlist as song, index}
			<div class:playing={index === songPlayingIndex} class="song">
				<button data-index={index} on:click={handleClickOutside}>
				x</button>
				<span>{song.name} - {song.artist}</span>
			</div>
		{/each}
	</div>
</div>

<h1>Datenschutzerklärung</h1>
<p>Wir nutzen auf unserer Website Vercel, eine Cloud-Deployment-Plattform. Dienstanbieter ist das amerikanische Unternehmen Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789. Vercel verarbeitet Daten von Ihnen u.a. auch in den USA. Wir weisen darauf hin, dass nach Meinung des Europäischen Gerichtshofs derzeit kein angemessenes Schutzniveau für den Datentransfer in die USA besteht. Dies kann mit verschiedenen Risiken für die Rechtmäßigkeit und Sicherheit der Datenverarbeitung einhergehen. Als Grundlage der Datenverarbeitung bei Empfängern mit Sitz in Drittstaaten (außerhalb der Europäischen Union, Island, Liechtenstein, Norwegen, also insbesondere in den USA) oder einer Datenweitergabe dorthin verwendet Vercel sogenannte Standardvertragsklauseln (= Art. 46. Abs. 2 und 3 DSGVO). Standardvertragsklauseln (Standard Contractual Clauses – SCC) sind von der EU-Kommission bereitgestellte Mustervorlagen und sollen sicherstellen, dass Ihre Daten auch dann den europäischen Datenschutzstandards entsprechen, wenn diese in Drittländer (wie beispielsweise in die USA) überliefert und dort gespeichert werden. Durch diese Klauseln verpflichtet sich Vercel, bei der Verarbeitung Ihrer relevanten Daten, das europäische Datenschutzniveau einzuhalten, selbst wenn die Daten in den USA gespeichert, verarbeitet und verwaltet werden. Diese Klauseln basieren auf einem Durchführungsbeschluss der EU-Kommission. Sie finden den Beschluss und die entsprechenden Standardvertragsklauseln u.a. hier: <a href="https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de">eur-lex.europa.eu/eli/</a> Die Datenverarbeitungsbedingung (Data Processing Addendum), welche den Standardvertragsklauseln entspricht, finden Sie unter <a href="https://vercel.com/legal">vercel-legal</a> Mehr über die Daten, die durch die Verwendung von Vercel verarbeitet werden, erfahren Sie in der Privacy Policy auf <a href="https://vercel.com/legal/privacy-policy">vercel-privacy-policy</a>. </p>
<h3>Benennung der verantwortlichen Stelle</h3>
<p>Es handelt sich um eine freie Website. Es kann jederzeit Widerspruch gegen geteilte Inhalte eingelegt werden (<a href="mailto:indyaanajones@t-online.de">indyaanajones@t-online.de</a>). </p>
<p>Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).</p>
<h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
<p>Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail (<a href="mailto:indyaanajones@t-online.de">indyaanajones@t-online.de</a>). Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>
<h3>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h3>
<p>Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>.</p>
<h3>Recht auf Datenübertragbarkeit</h3>
<p>Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
<h3>Recht auf Auskunft, Berichtigung, Sperrung, Löschung</h3>
<p>Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.</p>
<h3>SSL- bzw. TLS-Verschlüsselung</h3>
<p>Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie über diese Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine verschlüsselte Verbindung an der „https://“ Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.</p>

<h2>Cookies</h2>
<p>Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.</p>
<p>Einige Cookies sind “Session-Cookies.” Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen. Solche Cookies helfen uns, Sie bei Rückkehr auf unserer Website wiederzuerkennen.</p>
<p>Mit einem modernen Webbrowser können Sie das Setzen von Cookies überwachen, einschränken oder unterbinden. Viele Webbrowser lassen sich so konfigurieren, dass Cookies mit dem Schließen des Programms von selbst gelöscht werden. Die Deaktivierung von Cookies kann eine eingeschränkte Funktionalität unserer Website zur Folge haben.</p>
<p>Das Setzen von Cookies, die zur Ausübung elektronischer Kommunikationsvorgänge oder der Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorb) notwendig sind, erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und reibungslosen Bereitstellung unserer Dienste. Sofern die Setzung anderer Cookies (z.B. für Analyse-Funktionen) erfolgt, werden diese in dieser Datenschutzerklärung separat behandelt.</p>

<h2>YouTube Videos</h2>
<h3>Art und Umfang der Verarbeitung</h3>
<p>Wir haben auf unserer Website YouTube Video integriert. YouTube Video ist eine Komponente der Videoplattform der YouTube, LLC, auf der Nutzer Inhalte hochladen, über das Internet teilen und detaillierte Statistiken erhalten können. YouTube Video ermöglicht es uns, Inhalte der Plattform in unsere Website zu integrieren.</p>
<p>YouTube Video nutzt Cookies und weitere Browser-Technologien um Nutzerverhalten auszuwerten, Nutzer wiederzuerkennen und Nutzerprofile zu erstellen. Diese Informationen werden unter anderem genutzt, um die Aktivität der angehörten Inhalte zu analysieren und Berichte zu erstellen. Wenn ein Nutzer bei YouTube, LLC registriert ist, kann YouTube Video die abgespielten Videos dem Profil zuordnen.</p>
<p>Wenn Sie auf diese Inhalte zugreifen, stellen Sie eine Verbindung zu Servern der YouTube, LLC, Google Ireland Limited, Gordon House, Barrow Street Dublin 4 Irland her, wobei Ihre IP-Adresse und ggf. Browserdaten wie Ihr User-Agent übermittelt werden.</p>
<h3>Zweck und Rechtsgrundlage</h3>
<p>Die Nutzung des Dienstes erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a. DSGVO und § 25 Abs. 1 TTDSG.</p>
<p>Wir beabsichtigen personenbezogenen Daten an Drittländer außerhalb des Europäischen Wirtschaftsraums, insbesondere die USA, zu übermitteln. In Fällen, in denen kein Angemessenheitsbeschluss der Europäischen Kommission existiert (z.B. in den USA) haben wir mit den Empfängern der Daten anderweitige geeignete Garantien im Sinne der Art. 44 ff. DSGVO vereinbart. Dies sind – sofern nicht anders angegeben – Standardvertragsklauseln der EU-Kommission gemäß Durchführungsbeschluss (EU) 2021/914 vom 4. Juni 2021. Eine Kopie dieser Standardvertragsklauseln können Sie unter <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32021D0914&from=DE">https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32021D0914&from=DE</a> einsehen.</p>
<p>Zudem holen wir vor einem solchen Drittlandtransfer Ihre Einwilligung nach Art. 49 Abs. 1 Satz 1 lit. a. DSGVO ein, die Sie über die Einwilligung im Consent Manager (oder sonstigen Formularen, Registrierungen etc.) erteilen. Wir weisen Sie darauf hin, dass bei Drittlandübermittlungen im Detail unbekannte Risiken (z.B. die Datenverarbeitung durch Sicherheitsbehörden des Drittlandes, deren genauer Umfang und deren Folgen für Sie wir nicht kennen, auf die wir keinen Einfluss haben und von denen Sie unter Umständen keine Kenntnis erlangen) bestehen können.</p>
<h3>Speicherdauer</h3>
<p>Die konkrete Speicherdauer der verarbeiteten Daten ist nicht durch uns beeinflussbar, sondern wird von YouTube, LLC bestimmt. Weitere Hinweise finden Sie in der Datenschutzerklärung für YouTube Video: <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a>.</p>

<h2>Vimeo</h2>
<h3>Art und Umfang der Verarbeitung</h3>
<p>Wir haben auf unserer Website Vimeo Video integriert. Vimeo Video ist eine Komponente der Videoplattform von Vimeo, LLC, auf der Nutzer Inhalte hochladen, über das Internet teilen und detaillierte Statistiken erhalten können.</p>
<p>Vimeo Video ermöglicht es uns, Inhalte der Plattform in unsere Website zu integrieren.</p>
<p>Vimeo Video nutzt Cookies und weitere Browser-Technologien um Nutzerverhalten auszuwerten, Nutzer wiederzuerkennen und Nutzerprofile zu erstellen. Diese Informationen werden unter anderem genutzt, um die Aktivität der angehörten Inhalte zu analysieren und Berichte zu erstellen.</p>
<p>Wenn Sie auf diese Inhalte zugreifen, stellen Sie eine Verbindung zu Servern der Vimeo, LLC, 555 W 18th St, New York, New York 10011 her, wobei Ihre IP-Adresse und ggf. Browserdaten wie Ihr User-Agent übermittelt werden.</p>
<h3>Zweck und Rechtsgrundlage</h3>
<p>Der Einsatz von Vimeo erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a. DSGVO und § 25 Abs. 1 TTDSG.</p>
<p>Wir beabsichtigen personenbezogenen Daten an Drittländer außerhalb des Europäischen Wirtschaftsraums, insbesondere die USA, zu übermitteln. In Fällen, in denen kein Angemessenheitsbeschluss der Europäischen Kommission existiert (z.B. in den USA) haben wir mit den Empfängern der Daten anderweitige geeignete Garantien im Sinne der Art. 44 ff. DSGVO vereinbart. Dies sind – sofern nicht anders angegeben – Standardvertragsklauseln der EU-Kommission gemäß Durchführungsbeschluss (EU) 2021/914 vom 4. Juni 2021. Eine Kopie dieser Standardvertragsklauseln können Sie unter <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32021D0914&from=DE">https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32021D0914&from=DE</a> einsehen.</p>
<p>Zudem holen wir vor einem solchen Drittlandtransfer Ihre Einwilligung nach Art. 49 Abs. 1 Satz 1 lit. a. DSGVO ein, die Sie über die Einwilligung im Consent Manager (oder sonstigen Formularen, Registrierungen etc.) erteilen. Wir weisen Sie darauf hin, dass bei Drittlandübermittlungen im Detail unbekannte Risiken (z.B. die Datenverarbeitung durch Sicherheitsbehörden des Drittlandes, deren genauer Umfang und deren Folgen für Sie wir nicht kennen, auf die wir keinen Einfluss haben und von denen Sie unter Umständen keine Kenntnis erlangen) bestehen können.</p>
<h3>Speicherdauer</h3>
<p>Die konkrete Speicherdauer der verarbeiteten Daten ist nicht durch uns beeinflussbar, sondern wird von Vimeo, LLC bestimmt. Weitere Hinweise finden Sie in der Datenschutzerklärung für Vimeo Video: <a href="https://vimeo.com/privacy">https://vimeo.com/privacy</a>.</p>

<a href="https://www.cloudflare.com/privacypolicy/">https://www.cloudflare.com/privacypolicy/</a>

<img src="birgitDREAM.png" alt="RH_AI">
<p>I’ve created this page to share a view of Snowboarding, perceiving it purely as art form and fun. Snowboarders are artists pushing the boundaries of reality. I want to honor every piece featured on this web page including every collaboration in history/future & the now, from every snowboard fan front- 2 background 2 the last line of code I copied 2 create this web string.</p>
<br>
<p>THANK YOU </p>
<br>
transl.
<p><a href="https://www.deepl.com">Different Language</a></p>
