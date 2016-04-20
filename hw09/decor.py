import time

def f_time(fxn):
    start = time.time()
    t=0
    def func(arg):
        
        return fxn.__name__+"("+str(arg)+") : "+str(fxn(arg))+" \ntime: "+str(time.time()-start)
    
    return func

def func_info(fxn):

    def name(arg):
        return fxn.__name__
    return fxn

@f_time 
@func_info
def fib(n):
    seq=[0,1]
    for i in range(2,n):
        seq.append(seq[i-1]+seq[i-2])
    return seq[n-1]
        

hello=fib(325)
print hello

"""
def make_bold(fn):
    return lambda : "<b>" + fn() + "</b>"
def make_italic(fn):
    return lambda : "<i>" + fn() + "</i>"
@make_bold
@make_italic
def hello():
    return "hello world"
helloHTML = hello()
print helloHTML
"""
