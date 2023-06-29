import css from './Form.module.css'
import { LoginConnectionType } from '../../../model/login'
import { SsoIcon } from '../../UI/Icons/SsoIcon'

export interface Props {
	handleConnectionType: (type: LoginConnectionType) => void
	handleSighIn: () => void
	type: LoginConnectionType
	showSsoButton: boolean
}

export function Footer(props: Props): JSX.Element {
	return isSso(props.type) ? <SsoFooter {...props} /> : <DefaultFooter {...props} />
}

export interface HandlersProps {
	handleConnectionType: (type: LoginConnectionType) => void
	handleSighIn: () => void
}

function SsoFooter(props: HandlersProps): JSX.Element {
	return (
		<>
			<button className={css.webLoginBtn} onClick={props.handleSighIn}>
				Sign In With SSO
				<SsoIcon />
			</button>
			<div className={css.btnContainer}>
				<button
					className={css.ssoBtn}
					onClick={(): void => {
						props.handleConnectionType(LoginConnectionType.BasicAuthOrToken)
					}}
				>
					Use Basic-Auth
				</button>
			</div>
		</>
	)
}

export interface DefaultFooterProps {
	handleConnectionType: (type: LoginConnectionType) => void
	handleSighIn: () => void
	showSsoButton: boolean
}

function DefaultFooter(props: DefaultFooterProps): JSX.Element {
	return (
		<>
			<button className={css.webLoginBtn} onClick={props.handleSighIn}>
				Sign In
			</button>
			{props.showSsoButton && (
				<div className={css.btnContainer}>
					<button
						className={css.ssoBtn}
						onClick={(): void => {
							props.handleConnectionType(LoginConnectionType.Sso)
						}}
					>
						Continue With SSO
					</button>
				</div>
			)}
		</>
	)
}

function isSso(type: LoginConnectionType): boolean {
	return type === LoginConnectionType.Sso
}
