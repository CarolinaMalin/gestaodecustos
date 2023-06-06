class Evento:

    def receita(self, custo_festa,  margem_lucro):
        return custo_festa * ((margem_lucro / 100) + 1)
    
    def imposto_total(self, custo):
        iss = custo * 0.05  # 5% do total
        icms = custo * 0.18  # 18% do total
        cofins = custo * 0.03  # 3% do total
        pis = custo * 0.0065  # 0.65% do total
        return iss + icms + cofins + pis

    def ingressos(self, quantidade_pessoas, receita):
        ingresso = (receita * 0.6)/ quantidade_pessoas
        return ingresso + self.imposto_total(ingresso)

    def custo(self, quantidade_pessoas, atracao):
        quantidade_bombeiros = quantidade_pessoas/500
        custo_bombeiro = quantidade_bombeiros * 140
        quantidade_policia = quantidade_pessoas/200
        custo_policia = quantidade_policia * 200
        custo_aluguel = quantidade_pessoas/3.5 * 40
        custo_festa = custo_bombeiro + custo_policia + custo_aluguel + atracao 
        return custo_aluguel, custo_bombeiro, custo_policia, custo_festa
    
    def calcular_impostos(self, receita_total):
        iss = receita_total * 0.05  # 5% do total
        icms = receita_total * 0.18  # 18% do total
        cofins = receita_total * 0.03  # 3% do total
        pis = receita_total * 0.0065  # 0.65% do total
        return iss, icms, cofins, pis

    def calcular_receita_liquida(self, receita_total):
        iss, icms, cofins, pis = self.calcular_impostos(receita_total)
        receita_liquida = receita_total - iss - icms - cofins - pis
        print("A receita líquida após a dedução do ISS, ICMS, COFINS e PIS é: R${:.2f}".format(receita_liquida))

# Crie um novo evento
meu_evento = Evento()

# Cálculo de custos
quantidade_pessoas = 2000
custo_atracao = 10000  # Custo da atração (música, palestra, etc.)
custo_aluguel, custo_bombeiro, custo_policia, custo_festa = meu_evento.custo(quantidade_pessoas, custo_atracao)
print("Custo da Atração: R${:.2f}".format(custo_atracao))
print("Custo do Aluguel: R${:.2f}".format(custo_aluguel))
print("Custo dos Bombeiros: R${:.2f}".format(custo_bombeiro))
print("Custo da Polícia: R${:.2f}".format(custo_policia))
print("Custo Total da Festa: R${:.2f}".format(custo_festa))

# Cálculo de receita
margem_lucro = 20  # margem de lucro desejada em porcentagem
receita = meu_evento.receita(custo_festa, margem_lucro)
print("Receita Necessária (incluindo lucro): R${:.2f}".format(receita))

# Cálculo do preço dos ingressos
preco_ingresso = meu_evento.ingressos(quantidade_pessoas, receita)
print("Preço do Ingresso: R${:.2f}".format(preco_ingresso))

# Cálculo dos impostos
iss, icms, cofins, pis = meu_evento.calcular_impostos(receita)
print("ISS: R${:.2f}".format(iss))
print("ICMS: R${:.2f}".format(icms))
print("COFINS: R${:.2f}".format(cofins))
print("PIS: R${:.2f}".format(pis))

# Cálculo da receita líquida
meu_evento.calcular_receita_liquida(receita)
