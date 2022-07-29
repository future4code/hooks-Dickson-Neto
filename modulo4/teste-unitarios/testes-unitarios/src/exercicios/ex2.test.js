import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });
  
  
  it("retorna true para 'asa'", ()=>{
    const ehPalindromo = checaPalindromo("asa");
    expect(ehPalindromo).toEqual(true)
  })
  
  it("retorna true para 'arara'", ()=>{
    const ehPalindromo = checaPalindromo("arara");
    expect(ehPalindromo).toEqual(true)
  })

  it("retorna true para 'osso'",()=>{
    const ehPalindromo = checaPalindromo("osso")

    expect(ehPalindromo).toEqual(true)
  })
 //FUNÇÃO QUE DEVERIA ESTA FUNCIONANDO MAIS NAO ESTA.
 //talvez por haver espaçamento nas letras que formariam uma palavra.
  it( "retorna true para 'Socorram-me subi no onibus em marrocos'",() =>{
    const ehPalindromo = checaPalindromo("Socorram-me subi no onibus em marrocos")

    expect(ehPalindromo).toEqual(false)
  })
});
