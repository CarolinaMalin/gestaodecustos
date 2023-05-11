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

# Suponha que o custo do evento é R$10.000
evento = Evento(100000)

# Adicionar diferentes fontes de receita. Por exemplo, 200 ingressos a R$50 cada, 500 bebidas a R$10 cada e 300 comidas a R$15 cada.
evento.adicionar_receita("Ingressos", 50, 200)
evento.adicionar_receita("Bebidas", 10, 500)
evento.adicionar_receita("Comidas", 15, 300)

# Calcular a receita necessária
evento.calcular_receita_necessaria()
