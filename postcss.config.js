import postcssPresetEnv from 'postcss-preset-env'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import postcssDiscardComments from 'postcss-discard-comments'
import postcssComment from 'postcss-comment'

export default {
    plugins: [
        autoprefixer(),
        cssnano(),
        postcssDiscardComments(),
        postcssPresetEnv({
            features: {
                'nesting-rules': true,
            },
        }),
    ],
    parser: postcssComment,
}
