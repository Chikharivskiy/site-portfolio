<?php
/**
 * Validator: класс-хелпер, валидацирует данные пришедшие от пользователя
 */
class Validator
{
	/**
     * Проверяет валидный ли E-mail, если да, то
     * возвращает TRUE, в противном случае FALSE.
     * @param string $email
     * @return boolean
     */
	public static function isValidEmail($email)
	{
		return filter_var($email, FILTER_VALIDATE_EMAIL);
	}

	/**
     * Проверяет пришли ли данные POST-запросом, если да,
     * то возвращает TRUE, в противном случае FALSE.
     * @return boolean
     */
	public static function isPost()
	{
		return $_SERVER['REQUEST_METHOD'] === 'POST';
	}

	/**
     * Проверяет пришли ли данные Ajax-запросом, если да,
     * то возвращает TRUE, в противном случае FALSE.
     * @return boolean
     */
	public static function isAjax()
	{
		return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && $_SERVER['HTTP_X_REQUESTED_WITH'] === 'XMLHttpRequest';
	}
}