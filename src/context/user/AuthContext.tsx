"use client"
import { createContext, ReactNode, use, useEffect, useState } from 'react'
import { destroyCookie, setCookie } from 'nookies'
import { useRouter } from 'next/navigation'
import { api } from '@/services/apiClient'
import { toast } from 'sonner'

interface AuthContextData {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signUp: (credentials: SignUpProps) => Promise<void>
  logoutUser: () => Promise<void>;
  myPlano: (tipoPlano: string | FormDataEntryValue) => void;
  contextPlano: tiposDeMensalidade,
  openModal: () => void;
  controlModal: boolean;
  closeButton: () => void;
  heighPage: (height: boolean) => void;
  height: boolean
}

interface UserProps {
  id: string;
  name: string;
  email: string;
  endereço: string | null;
  subscriptions?: SubscriptionProps | null;
}

interface SubscriptionProps {
  id: string;
  status: string;
}

type AuthProviderProps = {
  children: ReactNode;
}

interface SignInProps {
  email: string;
  password: string;
}

interface SignUpProps {
  email: string;
  password: string;
  name: string;
  telefone: string
}


interface tiposDeMensalidade {
  plano: string
  valor: string,
  oldValue: string,
  discount: string
}




export const AuthContext = createContext({} as AuthContextData)


export function signOut() {
  console.log("ERORR LOGOUT");
  try {
    destroyCookie(null, '@consultoria', { path: '/' })
  } catch (err) {
    console.log("Error ao sair")
    return
  }
  window.location.href = "/login"
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>()
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [contextPlano, setContextPlano] = useState<tiposDeMensalidade>({
    plano: "Mensal",
    valor: "600",
    oldValue: "800",
    discount: "5"
  })
  const [controlModal, setControlModal] = useState(false)
  const [height, setHeight] = useState<boolean>()


  const planos: tiposDeMensalidade[] = [
    {
      plano: "Mensal",
      valor: "600",
      oldValue: "800",
      discount: "5"
    },
    {
      plano: "Trimestral",
      valor: "900",
      oldValue: "1200",
      discount: "6"
    },
    {
      plano: "Semestral",
      valor: "1.300",
      oldValue: "1800",
      discount: "10"
    }
  ]


  const router = useRouter()

  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await api.post("/session", {
        email,
        password,
      })

      const { id, name, token, subscriptions, endereço } = response.data;
      console.log(response)

      setCookie(undefined, '@consultoria', token, {
        maxAge: 60 * 60 * 24 * 30, // Expirar em 1 mês
        path: '/'
      })
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
    catch (err) {
      console.log("ERRO AO ENTRAR", err)
      return
    }
    window.location.href = "/"
    toast.success("Logado com sucesso")
  }


  async function signUp({ email, name, password, telefone }: SignUpProps) {

    if (!email || !name || !password || !telefone) {
      toast.warning("Todos os campos obrigatórios")
      return console.log("preencha todos os campos")
    }

    try {
      const response = await api.post("/users", {
        email,
        name,
        password,
        telefone
      })
    } catch (err) {
      console.log(err)
      return
    }
    window.location.href = "/login"


  }

  async function logoutUser() {
    try {
      destroyCookie(null, "@consultoria", { path: '/' })
      setUser(null)
      window.location.href = "/"
    } catch (err) {
      console.log(err)
    }
  }




  function myPlano(tipoPlano: string | FormDataEntryValue) {

    if (tipoPlano === planos[0].plano) {
      setContextPlano(planos[0])
    }
    else {
      if (tipoPlano === planos[1].plano) {
        setContextPlano(planos[1])
        return
      }
      setContextPlano(planos[2])
    }

  }

  function openModal() {
    setControlModal(!controlModal)
  }

  function closeButton() {
    setControlModal(false)
  }


  function heighPage(height: boolean) {
    setHeight(height)
  }






  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signUp, logoutUser, myPlano, contextPlano, openModal, controlModal, closeButton, heighPage, height }}>
      {children}
    </AuthContext.Provider>
  )
}