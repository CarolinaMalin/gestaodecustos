class Evento:
    def __init__(self, custo):
        self.custo = custo
        self.receitas = {}

    def adicionar_receita(self, nome, preco_unitario, quantidade):
        self.receitas[nome] = preco_unitario * quantidade

    def calcular_receita_total(self):
        return sum(self.receitas.values())

    def calcular_receita_necessaria(self):
        receita_total = self.calcular_receita_total()
        if receita_total >= self.custo:
            print("A receita total cobre o custo do evento.")
        else:
            print("A receita total não cobre o custo do evento. É necessário gerar uma receita adicional de: R${:.2f}".format(self.custo - receita_total))

    def calcular_impostos(self):
        receita_total = self.calcular_receita_total()
        iss = receita_total * 0.05  # 5% do total
        icms = receita_total * 0.18  # 18% do total
        cofins = receita_total * 0.03  # 3% do total
        pis = receita_total * 0.0065  # 0.65% do total

        return iss, icms, cofins, pis

    def calcular_receita_liquida(self):
        receita_total = self.calcular_receita_total()
        iss, icms, cofins, pis = self.calcular_impostos()
        receita_liquida = receita_total - iss - icms - cofins - pis

        print("A receita líquida após a dedução do ISS, ICMS, COFINS e PIS é: R${:.2f}".format(receita_liquida))

# Crie um novo evento com um custo de R$1000
meu_evento = Evento(1000)

# Adicione algumas receitas
meu_evento.adicionar_receita("Ingressos", 50, 100) # nome: "Ingressos", preço unitário: R$50, quantidade: 100
meu_evento.adicionar_receita("Bebidas", 10, 200)  # nome: "Bebidas", preço unitário: R$10, quantidade: 200
meu_evento.adicionar_receita("Comidas", 20, 150)  # nome: "Comidas", preço unitário: R$20, quantidade: 150

# Calcule e imprima a receita total
print("Receita Total: R${:.2f}".format(meu_evento.calcular_receita_total()))

# Calcule a receita necessária para cobrir o custo do evento
meu_evento.calcular_receita_necessaria()

# Calcule os impostos
iss, icms = meu_evento.calcular_impostos()
print("ISS: R${:.2f}".format(iss))
print("ICMS: R${:.2f}".format(icms))

# Calcule e imprima a receita líquida
meu_evento.calcular_receita_liquida()

