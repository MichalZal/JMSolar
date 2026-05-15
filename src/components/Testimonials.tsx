export default function Testimonials() {
  return (
    <section className="section testimonials fade-in">
      <div className="section__tag">Opinie klientów</div>
      <h2 className="section__title">
        Co mówią o nas<br />
        <em>klienci</em>
      </h2>
      <div className="testimonials__grid">
        <div className="testimonial">
          <div className="testimonial__stars">★★★★★</div>
          <p className="testimonial__quote">
            „Profesjonalne podejście od początku do końca. Doradztwo, montaż i
            serwis na najwyższym poziomie. Polecam z czystym sumieniem."
          </p>
          <div className="testimonial__author">Marek Wiśniewski</div>
          <div className="testimonial__location">Fotowoltaika 5,4 kW</div>
        </div>
        <div className="testimonial">
          <div className="testimonial__stars">★★★★★</div>
          <p className="testimonial__quote">
            „System hybrydowy z magazynem energii — pełna niezależność od sieci.
            Firma godna zaufania, terminowa i rzetelna."
          </p>
          <div className="testimonial__author">Katarzyna Nowak</div>
          <div className="testimonial__location">System hybrydowy + magazyn 10 kWh</div>
        </div>
        <div className="testimonial">
          <div className="testimonial__stars">★★★★★</div>
          <p className="testimonial__quote">
            „Od pierwszej rozmowy czułem, że mam do czynienia z fachowcami.
            Instalacja działa bez zarzutu, rachunki spadły o 80%. Bardzo
            polecam!"
          </p>
          <div className="testimonial__author">Tomasz Kowalczyk</div>
          <div className="testimonial__location">Fotowoltaika z magazynem energii</div>
        </div>
      </div>
    </section>
  );
}
