package br.com.dio.aop.aspects;

import java.math.BigDecimal;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import br.com.dio.aop.entity.Account;

@Aspect
public class AspectValidateBalance {

  @Before("execution(* br.com.dio.aop.service.AccountService.withdraw(..))")
  public void validateBefore(JoinPoint joinPoint) {
    if (joinPoint.getArgs().length != 2) return;
    Account account = (Account) joinPoint.getArgs()[0];
    BigDecimal amountWithdraw = (BigDecimal) joinPoint.getArgs()[1];
    if (amountWithdraw.compareTo(account.getBalance()) > 0) throw new RuntimeException("Saldo insuficiente!");
  }
}
