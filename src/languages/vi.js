const vi = {
	common: {
		changeLanguage: 'Thay đổi ngôn ngữ'
	},

	seo: {
		appName: 'Mút xốp mầm non',

		auth: {
			login: 'Đăng nhập - Mút xốp mầm non',
			register: 'Đăng ký tài khoản - Mút xốp mầm non'
		}
	},

	theme: {
		theme: 'Chủ đề',
		settings: 'Cài đặt',
		saveSettings: 'Lưu cài đặt',
		compact: {
			label: 'Chiều rộng',
			means: 'Cố định chiều rộng trên một số màn hình'
		},
		roundedCorners: {
			label: 'Góc tròn',
			means: 'Tăng độ bo tròn của góc'
		},
		responsiveFontSizes: {
			label: 'Phông chữ',
			means: 'Điều chỉnh phông chữ cho các thiết bị nhỏ'
		},
		themes: {
			dark: 'Tối',
			light: 'Sáng',
			nature: 'Thiên nhiên'
		}
	},

	auth: {
		login: 'Đăng nhập',
		register: 'Đăng ký',
		registerAccount: 'Đăng ký tài khoản',
		forgotPassword: 'Quên mật khẩu',
		dontHaveAccount: 'Chưa có tài khoản',

		terms: 'Điều khoản',
		policy: 'Chính sách',
		termsAndPolicy: 'Bằng việc đăng ký, bạn đã động ý với Mút xốp về',

		fullName: {
			label: 'Họ tên',
			placeholder: 'Họ và tên đầy đủ của bạn'
		},
		phone: {
			label: 'Số điện thoại',
			placeholder: 'Số điện thoại dùng để đăng nhập'
		},
		password: {
			label: 'Mật khẩu',
			placeholder: 'Mật khẩu'
		},
		passwordConfirm: {
			label: 'Xác nhận mật khẩu',
			placeholder: 'Xác nhận mật khẩu'
		},
		address: {
			label: 'Địa chỉ',
			placeholder: 'Địa chỉ nhận hàng của bạn',
			loadingText: 'Đang tìm kiếm địa chỉ phù hợp',
			placesFieldNoOptions: 'Không tìm thấy địa chỉ phù hợp, xin vui lòng kiểm tra lại!'
		},
		birthday: {
			label: 'Ngày sinh'
		},
		gender: {
			label: 'Giới tính',
			male: 'Nam',
			female: 'Nữ',
			other: 'Khác'
		}
	},

	// See more at https://github.com/jquense/yup/blob/master/src/locale.ts
	yup: {
		mixed: {
			default: '{{path}} không hợp lệ',
			required: '{{path}} là trường bắt buộc',
			oneOf: '{{path}} phải là một trong các giá trị sau: {{values}}',
			notOneOf: '{{path}} không được là một trong các giá trị sau: {{values}}',
			notType: '{{path}} phải là một {{type}}',
			defined: '{{path}} phải được định nghĩa'
		},
		string: {
			length: '{{path}} phải có chính xác {{length}} ký tự',
			min: '{{path}} phải có ít nhất {{min}} ký tự',
			max: '{{path}} phải có nhiều nhất {{max}} ký tự',
			matches: '{{path}} phải khớp với giá trị sau: "{{regex}}"',
			email: '{{path}} phải là một email hợp lệ',
			url: '{{path}} phải là một URL hợp lệ',
			uuid: '{{path}} phải là UUID hợp lệ',
			trim: '{{path}} phải là một chuỗi được cắt bớt',
			lowercase: '{{path}} phải là một chuỗi chữ thường',
			uppercase: '{{path}} phải là một chuỗi chữ hoa'
		},
		number: {
			min: '{{path}} phải lớn hơn hoặc bằng {min}',
			max: '{{path}} phải nhỏ hơn hoặc bằng {max}',
			lessThan: '{{path}} phải nhỏ hơn {{less}}',
			moreThan: '{{path}} phải lớn hơn {{more}}',
			positive: '{{path}} phải là một số dương',
			negative: '{{path}} phải là một số âm',
			integer: '{{path}} phải là một số nguyên'
		},
		date: {
			min: '{{path}} phải muộn hơn {{min}}',
			max: '{{path}} phải sớm hơn {{max}}'
		},
		boolean: {
			isValue: '{{path}} phải là {{value}}'
		},
		object: {
			noUnknown: '{{path}} có các khóa không xác định: {{unknown}}'
		},
		array: {
			min: '{{path}} phải có ít nhất {{min}} phần tử',
			max: '{{path}} phải có ít hơn hoặc bằng {{max}} phần tử',
			length: '{{path}} phải có {{length}} phần tử'
		}
	}
}

export default vi
