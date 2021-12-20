from ub import *

bdd  = bdd.BDD()
disp = display.Displayer(bdd)

for carte in ["classic","aram"]:
	for i in range(1,6):
		for j in range(10):
			res = disp.run(i,carte,[])
			path = "./test/{}_d{}_{}.png".format(carte,i,j)
			res.save(path)