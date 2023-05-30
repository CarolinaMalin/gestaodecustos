class Evento:

    def receita(self, custo_festa,  margem_lucro):
        return custo_festa * ((margem_lucro / 100) + 1)
    
    def imposto_total(self, custo):
        iss = custo * 0.05  # 5% do total
        icms = custo * 0.18  # 18% do total
        cofins = custo * 0.03  # 3% do total
        pis = custo * 0.0065  # 0.65% do total

        return iss + icms + cofins + pis

    def ingressos(self, quantidade, receita):
        ingresso = (receita * 0,6)/ quantidade
        return ingresso + self.imposto_total(ingresso)

    def custo(self, quantidade_pessoas, atracao):
        quantidade_bombeiros = quantidade_pessoas/500
        custo_bombeiro = quantidade_bombeiros * 140
        quantidade_policia = quantidade_pessoas/200
        custo_policia = quantidade_policia * 200
        custo_aluguel = quantidade_pessoas/3,5 * 40
        custo_festa = custo_bombeiro + custo_policia + custo_aluguel + atracao 
        return custo_aluguel, custo_bombeiro, custo_policia, custo_festa
    
    def calcular_impostos(receita_total):
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

    consumo
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

