módulo . exportações  =  async  ( {  constantes : { Colors }  } ,  { serverQueryDocument } ,  msg ,  commandData )  =>  {
	se  ( msg . sufixo )  {
		deixe  { sufixo }  =  msg ;
		se  ( msg . sufixo . startsWith ( ` "` )  &&  msg . sufixo . endsWith ( `"` ) )  sufixo  =  msg . sufixo . fatia ( 1 ,  msg . sufixo . comprimento  -  1 ) ;
		if  ( sufixo . comprimento  >  25 )  {
			 mensagem de retorno . enviar ( {
				embed : {
					cor : Cores . INVÁLIDO ,
					descrição : `Esse prefixo é muito longo, não acha? 🐳` ,
				} ,
			} ) ;
		}
		serverQueryDocument . set ( "config.command_prefix" ,  sufixo ) ;
		 mensagem de retorno . enviar ( {
			embed : {
				cor : Cores . SUCESSO ,
				título : `Entendi! 🐬` ,
				descrição : `O novo prefixo para este servidor é \` $ { sufixo } \ `` ,
			} ,
		} ) ;
	}
	 mensagem de retorno . enviar ( {
		embed : {
			cor : Cores . INFO ,
			título : "Tenho certeza que você já sabe disso ..." ,
			descrição : `O prefixo do comando neste servidor é \` $ { msg . guilda . commandPrefix } \ `` ,
		} ,
	} ) ;
} ;