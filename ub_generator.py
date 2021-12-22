from typing import AsyncIterable
from ub import *

bdd  = bdd.BDD()
disp = display.Displayer(bdd)
pick = pick.Picker(bdd)

# for carte in ["classic","aram"]:
# 	for i in range(1,6):
# 		for j in range(10):
# 			res = disp.run(i,carte,[])
# 			path = "./test/{}_d{}_{}.png".format(carte,i,j)
# 			res.save(path)

# res = disp.run(1,"classic",[])
# res.show()

pick = pick.Picker(bdd)
res = pick.run(1,"classic",[])
print(res)